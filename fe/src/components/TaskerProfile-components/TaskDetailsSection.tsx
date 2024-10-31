import React, { useState } from 'react';
import { Button } from '../ui/button';
import { api } from '@/lib';
import { WorkDetail } from './ProfileSection'; // Adjust the import path if necessary
import TaskDetailModal from './TaskDetailModal';

type TaskDetailsSectionProps = {
  workDetails: WorkDetail[];
  onSave: (updatedWorkDetails: WorkDetail[]) => void;
};

const TaskDetailsSection: React.FC<TaskDetailsSectionProps> = ({
  workDetails,
  onSave,
}) => {
  const [tasks, setTasks] = useState<WorkDetail[]>(workDetails);
  const [isSaving, setIsSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<WorkDetail | null>(null);

  const handleEditClick = (task: WorkDetail) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentTask(null);
  };

  const handleModalSave = async (updatedTask: WorkDetail) => {
    setIsSaving(true);
    try {
      // Update the task in the backend
      await api.put(`/workDetails/update/${updatedTask._id}`, updatedTask, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      // Update the task in the local state
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        )
      );

      onSave(
        tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      ); // Update the parent component
    } catch (error) {
      console.error('Error saving task detail:', error);
      alert('Failed to save task detail');
    } finally {
      setIsSaving(false);
      handleModalClose();
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Task Details
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {task.taskName}
            </h3>
            {/* Display summary information */}
            <p className="text-gray-600">
              <strong>Minimum Hours:</strong> {task.minHours}
            </p>
            <p className="text-gray-600">
              <strong>Vehicles:</strong> {task.vehicles}
            </p>
            <p className="text-gray-600">
              <strong>Tools:</strong> {task.tools}
            </p>
            <p className="text-gray-600">
              <strong>Skills and Experience:</strong> {task.skillsAndExperience}
            </p>
            {/* Images */}
            {task.images && task.images.length > 0 && (
              <div className="flex space-x-4 mt-2">
                {task.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Task"
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
            )}

            <Button
              variant="outline"
              className="mt-4"
              onClick={() => handleEditClick(task)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>

      {/* Task Detail Modal */}
      {isModalOpen && currentTask && (
        <TaskDetailModal
          task={currentTask}
          onClose={handleModalClose}
          onSave={handleModalSave}
          isSaving={isSaving}
        />
      )}
    </div>
  );
};

export default TaskDetailsSection;

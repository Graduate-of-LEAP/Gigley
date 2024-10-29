import React from 'react';
import { Button } from '../ui/button';
import { Task } from './my-task';

type TaskCardProps = {
  task: Task;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
  actionLabel?: string;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onStatusChange,
  actionLabel,
}) => {
  const handleConfirm = () => {
    console.log(
      'handleConfirm called with taskId:',
      task._id,
      'status: confirmed'
    );
    onStatusChange(task._id, 'confirmed');
  };

  const handleComplete = () => {
    console.log(
      'handleComplete called with taskId:',
      task._id,
      'status: completed'
    );
    onStatusChange(task._id, 'completed');
  };

  const handleCancel = () => {
    console.log(
      'handleCancel called with taskId:',
      task._id,
      'status: canceled'
    );
    onStatusChange(task._id, 'canceled');
  };

  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="text-[#2a9df4] font-bold">{task.taskSize} Task</h3>
      <p className="text-[#1167b1] font-medium">Location: {task.location}</p>
      <p className="text-gray-700">
        Date:{' '}
        {task.specificDate
          ? new Date(task.specificDate).toLocaleDateString()
          : 'No date specified'}
      </p>
      <p className="text-gray-700">Time: {task.timeOfDay || 'Anytime'}</p>
      <p className="text-gray-700 mt-2">{task.description}</p>

      <div className="mt-4 space-x-2">
        {actionLabel && task.status === 'pending' && (
          <Button onClick={handleConfirm} className="bg-[#2a9df4] text-white">
            {actionLabel}
          </Button>
        )}
        {task.status === 'confirmed' && (
          <Button onClick={handleComplete} className="bg-green-500 text-white">
            Mark as Completed
          </Button>
        )}
        {(task.status === 'pending' || task.status === 'confirmed') && (
          <Button onClick={handleCancel} className="bg-red-500 text-white">
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;

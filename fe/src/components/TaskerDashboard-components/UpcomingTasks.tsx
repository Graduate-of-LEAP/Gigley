import React, { useEffect, useState } from 'react';
import { TaskCard } from './TaskCard';
import { api } from '@/lib';

type ConfirmedTask = {
  _id: string;
  subCategoryId: {
    _id: string;
    subCategoryName: string;
  };
  specificDate: string;
  timeOfDay: string;
  location: string;
  taskSize: string;
  customerId: {
    _id: string;
  };
  description: string;
};

export const UpcomingTasks = () => {
  const [upcomingTasks, setUpcomingTasks] = useState<ConfirmedTask[]>([]);

  useEffect(() => {
    // Function to fetch confirmed tasks from the backend
    const fetchConfirmedTasks = async () => {
      try {
        const response = await api.get('/task/getComfirmedTask', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        // Extract confirmed tasks
        const confirmedTasks = response.data.confirmedTasks || []; // Use an empty array if data is undefined
        setUpcomingTasks(confirmedTasks);
      } catch (error) {
        console.error('Error fetching confirmed tasks:', error);
      }
    };

    fetchConfirmedTasks();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#2a9df4]">
      <h2 className="text-2xl font-semibold text-[#1167b1] mb-4">
        Upcoming Tasks
      </h2>
      <div className="space-y-4">
        {upcomingTasks.length > 0 ? (
          upcomingTasks.map((task) => (
            <TaskCard
              key={task._id}
              taskName={task.subCategoryId.subCategoryName} // Display subcategory name
              date={new Date(task.specificDate).toLocaleDateString()}
              time={task.timeOfDay}
              location={task.location}
              taskSize={task.taskSize}
              description={task.description}
            />
          ))
        ) : (
          <p className="text-gray-500">No upcoming tasks at the moment.</p>
        )}
      </div>
    </div>
  );
};

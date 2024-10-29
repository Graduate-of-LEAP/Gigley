import React, { useEffect, useState } from 'react';
import { TaskCard } from './TaskCard';
import { api } from '@/lib';

type ConfirmedTask = {
  _id: string;
  taskName: string; // Assuming taskName is part of your database model
  specificDate: string;
  timeOfDay: string;
  location: string;
  clientName: string;
  clientAvatar: string;
};

export const UpcomingTasks = () => {
  const [upcomingTasks, setUpcomingTasks] = useState<ConfirmedTask[]>([]);

  useEffect(() => {
    // Function to fetch confirmed tasks from the backend
    const fetchConfirmedTasks = async () => {
      try {
        const response = await api.get('/task/get', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        // Filter tasks to only include confirmed ones
        const confirmedTasks = response.data.upcomingTasks; // Assuming 'upcomingTasks' contains confirmed tasks
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
              taskName={task.taskName}
              date={new Date(task.specificDate).toLocaleDateString()}
              time={task.timeOfDay}
              location={task.location}
              clientName={task.clientName}
              clientAvatar={task.clientAvatar}
            />
          ))
        ) : (
          <p className="text-gray-500">No upcoming tasks at the moment.</p>
        )}
      </div>
    </div>
  );
};

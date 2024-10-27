// UpcomingTasks.tsx

import React from 'react';
import { TaskCard } from './TaskCard';

export const UpcomingTasks = () => {
  const upcomingTasks = [
    {
      taskName: 'Furniture Assembly',
      date: 'Oct 30, 2024',
      time: '10:00 AM',
      location: 'Bayangol District',
      clientName: 'John Doe',
      clientAvatar: 'https://example.com/avatar.jpg',
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border-t-4 border-[#2a9df4]">
      <h2 className="text-2xl font-semibold text-[#1167b1] mb-4">
        Upcoming Tasks
      </h2>
      <div className="space-y-4">
        {upcomingTasks.length > 0 ? (
          upcomingTasks.map((task, index) => (
            <TaskCard
              key={index}
              taskName={task.taskName}
              date={task.date}
              time={task.time}
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

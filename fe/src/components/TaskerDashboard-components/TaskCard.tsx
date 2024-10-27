// TaskCard.tsx

import React from 'react';

type TaskCardProps = {
  taskName: string;
  date: string;
  time: string;
  location: string;
  clientName: string;
  clientAvatar?: string;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  taskName,
  date,
  time,
  location,
  clientName,
  clientAvatar,
}) => {
  return (
    <div className="flex border p-6 rounded-lg shadow-md bg-white space-x-4 hover:shadow-lg transition duration-300 ease-in-out">
      {/* Client Avatar */}
      {clientAvatar && (
        <img
          src={clientAvatar}
          alt={clientName}
          className="w-16 h-16 rounded-full object-cover border border-gray-200"
        />
      )}

      {/* Task Details */}
      <div className="flex flex-col justify-between w-full">
        <h3 className="text-xl font-semibold text-[#1167b1] mb-2">
          {taskName}
        </h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong className="text-gray-800">Date:</strong> {date}
          </p>
          <p>
            <strong className="text-gray-800">Time:</strong> {time}
          </p>
          <p>
            <strong className="text-gray-800">Location:</strong> {location}
          </p>
          <p>
            <strong className="text-gray-800">Client:</strong> {clientName}
          </p>
        </div>
      </div>
    </div>
  );
};

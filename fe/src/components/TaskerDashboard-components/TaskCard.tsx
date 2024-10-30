import React from 'react';

type TaskCardProps = {
  taskName: string;
  date: string;
  time: string;
  location: string;
  taskSize: string;
  description: string;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  taskName,
  date,
  time,
  location,
  taskSize,
  description,
}) => (
  <div className="border p-4 rounded-md shadow-sm bg-white">
    <h3 className="text-[#2a9df4] font-bold">{taskName}</h3>
    <p className="text-[#1167b1] font-medium">Location: {location}</p>
    <p className="text-gray-700">Date: {date}</p>
    <p className="text-gray-700">Time: {time}</p>
    <p className="text-gray-700">Task Size: {taskSize}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

export default TaskCard;

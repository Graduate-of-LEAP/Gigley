import React from 'react';
import { Container } from '../assets/Container';
import Image from 'next/image';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

interface TaskersRecommendedProps {
  taskers: Tasker[];
}
const TaskersRecommended = ({ taskers }: TaskersRecommendedProps) => {
  return (
    <Container className="bg-white py-40">
      <div className="h-fit w-fit bg-[#F9FAFB] flex justify-center px-4 ">
        <h3 className="text-lg font-semibold">Танд санал болгож буй ажилчид</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {taskers.map((tasker) => (
          <div
            key={tasker._id}
            className="border p-4 rounded-lg flex flex-col justify-center items-center"
          >
            <h1 className="mb-2 font-bold">Таны байршилд алдартай ажилчин</h1>
            <Image
              src="/picture/avatar.png"
              alt={`${tasker.firstName} ${tasker.lastName}`}
              width={108}
              height={108}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h4 className="text-center mt-2 font-semibold">
              {tasker.firstName} {tasker.lastName}
            </h4>
            <p className="text-center text-sm text-gray-500">{tasker.email}</p>
            <p className="text-center text-sm text-green-500">
              Location: {tasker.location}
            </p>
            <div className="mt-4 flex flex-col items-center">
              <p className="font-semibold">Top Skills:</p>
              <ul className="text-sm text-gray-600">
                {tasker.workDetails.map((workDetail) => (
                  <li
                    key={workDetail._id}
                    className="border hover:bg-blue-300 rounded w-[270px] h-[40px] flex items-center p-2 mb-1"
                  >
                    {workDetail.taskName}
                  </li>
                ))}
              </ul>
              <p className="text-[#0E7A5F] mt-1">Ажилтны профайлыг харах</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TaskersRecommended;

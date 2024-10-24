import React from 'react';
import { Container } from '../assets/Container';
import Image from 'next/image';

export const TaskersRecommended = () => {
  return (
    <Container className="bg-white py-40">
      <div className="h-fit w-fit bg-[#F9FAFB] flex justify-center px-4 ">
        <h3 className="text-lg font-semibold">Танд санал болгож буй ажилчид</h3>
      </div>
      {/* Tasker cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Tasker card for Oleksandr S. */}
        <div className="border p-4 rounded-lg flex flex-col justify-center items-center ">
          <h1 className="mb-2 font-bold">Таны байршилд алдартай ажилчин</h1>
          <Image
            src="/picture/profile.png"
            alt="Oleksandr S."
            width={108}
            height={108}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h4 className="text-center mt-2 font-semibold">Oleksandr S.</h4>
          <p className="text-center text-sm text-gray-500">
            1011 Completed Tasks
          </p>
          <p className="text-center text-sm text-green-500">
            5.0 (667 reviews)
          </p>
          <div className="mt-4 flex flex-col items-center">
            <p className="font-semibold">Top Skills:</p>
            <ul className="text-sm text-gray-600">
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                Electrical help for $70.20/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                Furniture Assembly for $54.71/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 ">
                Minor Home Repairs for $58.84/hr
              </li>
            </ul>

            <p className="text-[#0E7A5F] mt-1">Ажилтны профайлыг харах</p>
          </div>
        </div>

        {/* Tasker card for Samar A. */}
        <div className="border p-4 rounded-lg flex flex-col justify-center items-center">
          <h1 className="mb-2 font-bold">Таны байршилд алдартай ажилчин</h1>
          <Image
            src="/picture/profile.png"
            alt="Samar A."
            width={108}
            height={108}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h4 className="text-center mt-2 font-semibold">Samar A.</h4>
          <p className="text-center text-sm text-gray-500">
            207 Completed Tasks
          </p>
          <p className="text-center text-sm text-green-500">
            5.0 (127 reviews)
          </p>
          <div className="mt-4 flex flex-col items-center">
            <p className="font-semibold">Top Skills:</p>
            <ul className="text-sm text-gray-600">
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                Plumbing help for $58.84/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                Furniture Assembly for $53.68/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 ">
                General Mounting for $51.62/hr
              </li>
            </ul>
            <p className="text-[#0E7A5F] mt-1">Ажилтны профайлыг харах</p>
          </div>
        </div>

        {/* Tasker card for Vasyl S. */}
        <div className="border p-4 rounded-lg flex flex-col justify-center items-center">
          <h1 className="mb-2 font-bold">Таны байршилд алдартай ажилчин</h1>
          <Image
            src="/picture/profile.png"
            alt="Vasyl S."
            width={108}
            height={108}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h4 className="text-center mt-2 font-semibold">Vasyl S.</h4>
          <p className="text-center text-sm text-gray-500">
            3276 Completed Tasks
          </p>
          <p className="text-center text-sm text-green-500">
            5.0 (1957 reviews)
          </p>
          <div className="mt-4 flex flex-col items-center">
            <p className="font-semibold">Top Skills:</p>
            <ul className="text-sm text-gray-600 ">
              <li className="border  hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                General Mounting for $81.56/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2 mb-1">
                Minor Home Repairs for $92.91/hr
              </li>
              <li className="border hover:bg-green-100 rounded w-[270px] h-[40px] flex items-center p-2">
                Help Moving for $60.91/hr
              </li>
            </ul>
            <p className="text-[#0E7A5F] mt-1">Ажилтны профайлыг харах</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

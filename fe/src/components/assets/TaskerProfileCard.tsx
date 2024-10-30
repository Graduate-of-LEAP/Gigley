// TaskerProfileCard.tsx

import Image from 'next/image';
import { IoTrophySharp } from 'react-icons/io5';
import { MdOutlineStar } from 'react-icons/md';
import { TaskerIntroComponent } from '../SecondOfFindTasker-components/TaskerIntroComponent';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { useEffect, useState } from 'react';
import { api } from '@/lib';

export const TaskerProfileCard = () => {
  const [allTasker, setAllTasker] = useState<Tasker[]>([]);

  const getAllTaskerData = async () => {
    try {
      const response = await api.get('/getAllTasker/taskers');
      setAllTasker(response.data);
    } catch (error) {
      console.error('Error fetching taskers:', error);
    }
  };

  useEffect(() => {
    getAllTaskerData();
  }, []);

  return (
    <div className="flex-col gap-y-3">
      {allTasker.map((tasker, index) => (
        <div
          key={index}
          className="w-fit h-fit flex gap-x-6 p-6 border border-[#848484] rounded-2xl bg-white mb-[24px]"
        >
          <div className="flex flex-col items-center">
            <div className="w-[204px] h-[204px] bg-gray-700 rounded-full relative flex">
              {/* <Image
                src={tasker.img || '/default-profile.jpg'}
                fill
                alt="profile pic"
                className="rounded-full"
              /> */}
            </div>

            <div className="text-[#1167b1] font-semibold cursor-pointer py-2 text-center">
              View Profiles & <br /> Reviews
            </div>

            <button className="py-3 px-6 bg-[#1167b1] text-white font-semibold rounded-full">
              Select & Continue
            </button>

            <div className="text-[12px] text-[#7e7e7e] mt-4 w-[190px] text-center ">
              You can chat with your Tasker, adjust task details, or change task
              time after booking.
            </div>
          </div>

          <div className="flex-1">
            <TaskerIntroComponent item={tasker} />
          </div>
        </div>
      ))}
    </div>
  );
};

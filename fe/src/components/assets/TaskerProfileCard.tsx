import Image from 'next/image';
import { IoTrophySharp } from 'react-icons/io5';
import { MdOutlineStar } from 'react-icons/md';
import { TaskerIntroComponent } from '../SecondOfFindTasker-components/TaskerIntroComponent';
import exp from 'constants';

export type taskerDataType = {
  img: string;
  name: string;
  price: string;
  tag: string;
  rating: string;
  averageRating: number;
  totalReview: number;
  totalTasks: number;
  taskCategory: string;
  introDescription: string;
};

export type itemtype = {
  item: taskerDataType;
};

const taskerData = [
  {
    img: '/picture/how-it-works.png',
    name: 'Eric. O',
    price: '$37.6/hr',
    tag: 'Elite',
    rating: 'great value',
    averageRating: 4.9,
    totalReview: 123,
    totalTasks: 105,
    taskCategory: 'Furniture Assembly tasks',
    introDescription:
      ' Би гар урлалын багш бөгөөд тавилга засах, угсрах чиглэлээр 4 жил ажиллаж байна.',
  },
];

export const TaskerProfileCard = () => {
  return (
    <div className=" w-fit h-fit flex gap-x-6 p-6 border border-[#848484] rounded-2xl bg-white ">
      <div className="flex flex-col items-center">
        {taskerData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[204px] h-[204px] bg-gray-700 rounded-full relative flex"
            >
              <Image
                src={item.img}
                fill
                alt="profile pic"
                className="rounded-full"
              />
            </div>
          );
        })}

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
        {taskerData.map((item, index) => {
          return <TaskerIntroComponent key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

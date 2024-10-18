import { IoTrophySharp } from 'react-icons/io5';
import { MdOutlineStar } from 'react-icons/md';
import { itemtype, taskerDataType } from '../assets/TaskerProfileCard';
import { OneReviewComponent } from './OneReviewComponent';
import {
  reviewData,
  TaskerDetailedProfileCard,
} from '../assets/TaskerDetailedProfileCard';

export const TaskerIntroComponent = ({ item }: itemtype) => {
  return (
    <div className="">
      <div className="text-[24px] text-[#1f1f1f] font-bold flex justify-between ">
        <div className=" cursor-pointer hover:text-[#1167b1]">{item.name} </div>
        <div className="">{item.price} </div>
      </div>

      <div className="flex gap-x-2 mt-2">
        <div className="flex gap-1 py-[3xp] px-[4px] bg-[#f4e6f8] items-center text-[12px] text-[#8551b1]  rounded-sm w-fit font-semibold uppercase">
          <IoTrophySharp />
          <div>{item.tag}</div>
        </div>

        <div className="flex gap-1 py-[3xp] px-[4px] bg-[#dbfff2] items-center text-[12px] text-[#1167b1]  rounded-sm w-fit font-semibold uppercase">
          {item.rating}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-x-1">
          <MdOutlineStar className="text-[18px]" />
          <div className="flex text-[#1a1e1d] gap-x-1 ">
            <div>{item.averageRating}</div>
            <div>({item.totalReview})</div>
          </div>
        </div>

        <div className="text-[#2a9df4] font-semibold">
          {item.totalTasks} {item.taskCategory}
        </div>
        <div className="text-[#595c5b]">215 Assembly tasks overall</div>
      </div>

      <div className="text-[#595c5b] bg-[#f4f7f6] p-3 rounded-md mt-6">
        <div className="font-bold mb-2">How I can help:</div>
        <div className="w-[480px]">{item.introDescription}</div>
        <button className="text-[#2a9df4] font-semibold">
          <TaskerDetailedProfileCard />
        </button>
      </div>

      {reviewData.slice(0, 1).map((item, index) => {
        return <OneReviewComponent key={index} item={item} />;
      })}
    </div>
  );
};

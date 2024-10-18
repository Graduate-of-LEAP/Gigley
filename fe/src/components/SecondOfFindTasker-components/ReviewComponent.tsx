import { reviewDataType } from '@/components/assets/TaskerDetailedProfileCard';
import Image from 'next/image';
import { MdOutlineStar } from 'react-icons/md';

export const ReviewComponent = ({
  categoryTitle,
  totalComment,
  img,
  name,
  star,
  category,
  createAtDate,
  comment,
}: reviewDataType) => {
  return (
    <div className="flex flex-col mt-6">
      <div className="text-[#1b1e1d] pb-2 font-bold flex gap-2">
        <h1>{categoryTitle}</h1>
        <div>({totalComment})</div>
      </div>

      <div className="flex font-bold text-base gap-x-4 ">
        <div className="w-[48px] h-[48px] relative">
          <Image src={img} alt="userProfile" fill className="rounded-full" />
        </div>
        <div className="">
          <p>{name}</p>
          <div className="flex items-center gap-x-1 ">
            <MdOutlineStar className="text-black" />
            <div className="text-[#5c5c5c]">{star}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-2 my-2 ">
        <div className="bg-[#0e639e] text-[#b3e8fd] w-fit px-1 rounded-sm uppercase text-[12px]">
          {category}
        </div>

        <div>on {new Date(createAtDate).toLocaleDateString()}</div>
      </div>
      <div>{comment}</div>
    </div>
  );
};

import Image from 'next/image';
import { reviewItemType } from '../assets/TaskerDetailedProfileCard';

export const OneReviewComponent = ({ item }: reviewItemType) => {
  return (
    <div className="flex gap-x-2 items-center mt-6">
      <div className="w-[72px] h-[72px] relative rounded-full">
        <Image src={item.img} alt="profile" fill className="rounded-full" />
      </div>

      <div className="flex flex-col text-[#595c5b]">
        <div className="flex">
          <div className="font-semibold mr-2">{item.name} </div>
          <div> on {new Date(item.createAtDate).toLocaleDateString()}</div>
        </div>

        <p>"{item.comment}"</p>
      </div>
    </div>
  );
};

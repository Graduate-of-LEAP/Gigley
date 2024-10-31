import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { IoTrophySharp } from 'react-icons/io5';
import { MdOutlineStar } from 'react-icons/md';
import { ReviewComponent } from '@/components/SecondOfFindTasker-components/ReviewComponent';
import { WorkPhotoComponent } from '../SecondOfFindTasker-components/WorkPhotoComponent';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

export type reviewDataType = {
  categoryTitle: string;
  totalComment: number;
  img: string;
  name: string;
  star: number;
  category: string;
  createAtDate: Date;
  comment: string;
};

export type reviewItemType = {
  item: reviewDataType;
};

export const reviewData = [
  {
    categoryTitle: 'Тавилгын угсралтын талаархи сэтгэгдэл',
    totalComment: 123,
    img: '/picture/wp-2.jpg',
    name: 'Brenda H.',
    star: 5.0,
    category: 'Тавилга угсралт',
    createAtDate: new Date(),
    comment: 'Erick did a good job.',
  },
];

type itemType = {
  item: Tasker;
};

export const TaskerDetailedProfileCard = ({ item }: itemType) => {
  return (
    <Dialog>
      <DialogTrigger>Read More</DialogTrigger>
      <DialogContent className="max-w-[740px]">
        <DialogHeader className="w-full">
          <DialogTitle>
            <div className="flex gap-x-4 w-full">
              <div className="w-[72px] h-[72px] rounded-full relative border">
                <Image
                  src={item?.profileImage}
                  fill
                  alt="profile"
                  className="rounded-full"
                />
              </div>

              <div className="flex w-full flex-col justify-between">
                <div className="flex gap-x-4 items-center justify-between">
                  <div className="flex gap-x-2">
                    <div>
                      {item?.firstName} {item?.lastName}
                    </div>
                    <div className="flex gap-1 py-[3xp] px-[4px] bg-[#f4e6f8] items-center text-[12px] text-[#8551b1]  rounded-sm w-fit font-semibold ">
                      <IoTrophySharp />
                      <div>ELITE</div>
                    </div>

                    <div className="flex gap-1 py-[3xp] px-[4px] bg-[#dbfff2] items-center text-[12px] text-[#1167b1]  rounded-sm w-fit font-semibold ">
                      GREAT VALUE
                    </div>
                  </div>

                  <div className="text-2xl">$37.6/hr</div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-x-1 ">
                    <MdOutlineStar className="text-[18px]" />
                    <div className="flex text-[#1a1e1d] gap-x-1">
                      <div>4.9</div>
                      <div>(121 reviews)</div>
                    </div>
                  </div>
                  <button className="py-3 px-6 bg-[#1167b1] text-white font-semibold rounded-full">
                    Select & Continue
                  </button>
                </div>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="text-base">
            <div className="flex flex-col gap-y-2 ">
              <div>
                <div className="text-[#1b1e1d] pb-2 font-semibold">
                  Ур чадвар болон туршлага
                </div>
                <div className="text-[#1b1e1d] ">
                  {item?.workDetails.map((item) => item.skillsAndExperience)}
                </div>
              </div>
            </div>

            {item?.workDetails.map((detail, index) => {
              return <WorkPhotoComponent key={index} images={detail.images} />;
            })}

            <div>
              {reviewData.map((item, index) => {
                return (
                  <ReviewComponent
                    key={index}
                    categoryTitle={item.categoryTitle}
                    totalComment={item.totalComment}
                    img={item.img}
                    name={item.name}
                    star={item.star}
                    category={item.category}
                    createAtDate={item.createAtDate}
                    comment={item.comment}
                  />
                );
              })}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

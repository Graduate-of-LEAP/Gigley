// // TaskerIntroComponent.tsx

// 'use client';

// import { IoTrophySharp } from 'react-icons/io5';
// import { MdOutlineStar } from 'react-icons/md';
// import { OneReviewComponent } from './OneReviewComponent';
// import {
//   reviewData,
//   TaskerDetailedProfileCard,
// } from '../assets/TaskerDetailedProfileCard';
// import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
// import { WorkDetail } from '../TaskerProfile-components/ProfileSection';
// import { WorkDetailType } from './MainBody';

// export type itemtype = {
//   item: WorkDetail;
// };

// export type TaskerIntroComponentProps = {
//   item: WorkDetailType;
// };

// export const TaskerIntroComponent = ({ item }: TaskerIntroComponentProps) => {
//   const work = item.taskerId;
//   console.log(work, 'workDetail shuu');
//   return (
//     <div className="">
//       <div className="text-[24px] text-[#1f1f1f] font-bold flex justify-between">
//         <div className="cursor-pointer hover:text-[#1167b1]">
//           {item.taskerId.firstName} {item.taskerId?.lastName}
//         </div>
//         <div className="font-semibold">{}</div>
//       </div>

//       <div className="flex gap-x-2 mt-2">
//         <div className="flex gap-1 py-[3px] px-[4px] bg-[#f4e6f8] items-center text-[12px] text-[#8551b1] rounded-sm w-fit font-semibold uppercase">
//           <IoTrophySharp />
//           <div>Tag</div>
//         </div>

//         <div className="flex gap-1 py-[3px] px-[4px] bg-[#dbfff2] items-center text-[12px] text-[#1167b1] rounded-sm w-fit font-semibold uppercase">
//           rating
//         </div>
//       </div>

//       <div className="mt-4">
//         <div className="flex items-center gap-x-1">
//           <MdOutlineStar className="text-[18px]" />
//           <div className="flex text-[#1a1e1d] gap-x-1">
//             <div>avarage rating</div>
//             <div>(total Reviews)</div>
//           </div>
//         </div>

//         <div className="text-[#2a9df4] font-semibold">
//           total tasks, tas category
//         </div>
//         <div className="text-[#595c5b]">category tasks overall</div>
//       </div>

//       <div className="text-[#595c5b] bg-[#f4f7f6] p-3 rounded-md mt-6">
//         <div className="font-bold mb-2">How I can help:</div>
//         <div className="w-[480px]">TaskIntro</div>
//         <div className="text-[#2a9df4] font-semibold">
//           <TaskerDetailedProfileCard item={item} profileImage={item.taskerId} />
//         </div>
//       </div>

//       {reviewData.slice(0, 1).map((review, index) => (
//         <OneReviewComponent key={index} item={review} />
//       ))}
//     </div>
//   );
// };

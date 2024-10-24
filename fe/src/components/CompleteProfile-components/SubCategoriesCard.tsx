import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

interface SubCategoryCardProps {
  subCategory: string;
  onEdit: () => void;
}

export const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subCategory,
  onEdit,
}) => {
  return (
    <div
      className=" h-32 border-2 border-dashed border-[#2a9df4] p-4 rounded-lg flex flex-col items-center justify-between cursor-pointer"
      onClick={onEdit}
    >
      <span className="text-[#2a9df4]">{subCategory}</span>
      <span className="text-[#1167b1]">нэмэлт мэдээллээ оруулна уу!</span>
      <IoIosAddCircle className="w-10 h-10 text-[#1167b1]" />
    </div>
  );
};

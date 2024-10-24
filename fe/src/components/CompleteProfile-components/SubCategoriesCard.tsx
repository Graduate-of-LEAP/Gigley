import { useState } from 'react';

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
      className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex items-center justify-between cursor-pointer"
      onClick={onEdit}
    >
      <span>{subCategory}</span>
      <span className="text-green-500">+</span>
    </div>
  );
};

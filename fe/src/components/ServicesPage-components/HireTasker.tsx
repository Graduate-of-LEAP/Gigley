'use client';
import { apiGig } from '@/lib/axios';
import { Container } from '../assets/Container';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type CategoryType = {
  _id: string;
  name: string;
  subCategories: SubCategoryType[];
};

type SubCategoryType = {
  _id: string;
  subCategoryName: string;
};

const categoryImages = [
  '/picture/assembly.jpg',
  '/picture/mount.jpg',
  '/picture/moving.png',
  '/picture/cleaning.jpg',
];

export const HireTasker = () => {
  const [categories, setCategories] = useState<CategoryType[] | undefined>(
    undefined
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await apiGig.get('/mainCategory/get');
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Container className="bg-white py-8">
      <div>
        <div className="text-center font-bold text-2xl pb-2">Сонгоод ав</div>
        <div className="grid grid-cols-3 w-full gap-10">
          {categories?.map((category, i) => {
            return (
              <div key={i} className="border">
                <div className="relative w-full h-64">
                  <Image
                    fill
                    alt={category.name}
                    src={categoryImages[i % categoryImages.length]}
                    className="object-cover cursor-pointer"
                  />
                </div>
                <div className="px-4">
                  <div className="border-b border-gray-400 py-4">
                    <div className="font-bold text-[#1167b1]  hover:text-black">
                      {category.name}
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-1">
                    {category.subCategories.map((sub, i) => {
                      return (
                        <div
                          className="cursor-pointer text-[#1167b1] hover:text-black"
                          key={i}
                        >
                          {sub.subCategoryName}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

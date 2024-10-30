'use client';
import { useEffect, useState } from 'react';
import { Container } from '../assets/Container';
import { FaArrowRight } from 'react-icons/fa';
import { api } from '@/lib';
import Link from 'next/link';

type SubCategoryType = {
  subCategoryName: string;
  _id: string;
};

export const GetHelpToday = () => {
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);
  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const res = await api.get('/subCategory/get');
        setSubCategories(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubCategories();
  }, []);

  return (
    <Container className="bg-white">
      <div className="h-[516px] bg-white">
        <div className="flex flex-col justify-between  py-[88px] px-[24px]">
          <h1 className="text-3xl text-[#2B4C32] font-bold ">
            Өнөөдөр тусламж аваарай
          </h1>

          <div className="flex flex-wrap mt-[48px]">
            {subCategories.slice(0, 12).map((category, index) => (
              <button
                key={index}
                className="border border-black rounded-full py-2 px-4 m-2 hover:bg-blue-200 font-bold"
              >
                {category.subCategoryName}
              </button>
            ))}
          </div>
          <Link href="/clients-side/ServicesPage">
            <div className="flex mt-20  items-center text-center gap-2 cursor-pointer">
              <p className="mr-1 text-[#0D7A5F]">Бүх үйлчилгээг харах</p>
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

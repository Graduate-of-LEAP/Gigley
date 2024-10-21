'use client';
import { apiGig } from '@/lib/axios';
import { Container } from '../assets/Container';
import { useEffect, useState } from 'react';

type CategoryType = {
  _id: string;
  name: string;
};

export const HireTasker = () => {
  const [categories, setCategories] = useState<CategoryType[] | undefined>(
    undefined
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await apiGig.get('/category/get');
        setCategories(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Container className="bg-white">
      <div>
        <div className="text-center font-bold text-2xl">Сонгоод ав</div>
        <div className="grid grid-cols-3 border w-full gap-10">
          {categories?.map((category, i) => {
            return (
              <div key={i} className="border">
                <div className="text-center font-semibold text-green-700 hover:text-black">
                  {category.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

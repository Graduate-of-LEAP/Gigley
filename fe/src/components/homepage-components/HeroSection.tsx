'use client';
import { Container } from '../assets/Container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '@/lib';
import Link from 'next/link';

type SubCategoryType = {
  subCategoryName: string;
  _id: string;
};

export const HeroSection = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [filteredSubCat, setFilteredSubCat] = useState<SubCategoryType[]>([]);

  useEffect(() => {
    const getSubCategories = async () => {
      try {
        const res = await api.get('/subCategory/get');
        setSubCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSubCategories();
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = subCategories?.filter((subcategory) =>
        subcategory.subCategoryName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSubCat(filtered);
    } else {
      setFilteredSubCat([]);
    }
  }, [search, subCategories]);
  console.log(filteredSubCat);

  return (
    <Container className="bg-white py-10">
      <div className="h-[250px]">
        <div className=" text-[55px] flex flex-col items-center text-[#1167b1] font-bold leading-none gap-2">
          <h1>Таны итгэж болох</h1>
          <h1> туслах </h1>
        </div>
        <div className="flex justify-center mx-auto items-center mt-16 w-fit relative">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Та шаардлагатай үйлчилгээгээ хайна уу"
            name="search"
            className="w-[541px] h-[64px] rounded-s-full border border-[#1167b1]"
          />
          <Button
            type="submit"
            className="bg-[#1167b1] rounded-r-full h-[64px] w-[88px]"
          >
            <FaSearch className="text-white text-lg" />
          </Button>
          {filteredSubCat.length > 0 && (
            <div
              className={`border border-blue-700 rounded-xl overflow-hidden bg-white absolute items-start top-full z-20 flex flex-col w-full`}
            >
              {filteredSubCat?.map((subCat, i) => {
                return (
                  <Link href={`/clients-side/${subCat._id}`} key={i}>
                    <div className="cursor-pointer hover:font-bold  w-full px-4 py-2">
                      {subCat.subCategoryName}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

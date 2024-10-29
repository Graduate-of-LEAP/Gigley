'use client';
import { Container } from '../assets/Container';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Armchair, Car, Drill, House } from 'lucide-react';
import { api } from '@/lib';

type CategoryType = {
  name: string;
  subCategories: SubCategoryType[];
  _id: string;
};

type SubCategoryType = {
  subCategoryName: string;
  _id: string;
};
const categoryIcons = [Armchair, Car, Drill, House];
export const PopularServices = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  const [categories, setCategories] = useState<CategoryType[] | undefined>(
    undefined
  );
  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveTab(categories[0]._id);
    }
  }, [categories]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await api.get('/mainCategory/get');
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  if (!categories || categories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="bg-white">
      <div className="mt-4"></div>
      <div>
        <div className="flex gap-10 justify-center">
          <Tabs defaultValue={categories[0]._id} className="w-fit">
            <TabsList className="h-fit w-fit mx-auto overflow-hidden flex border-b border-black p-0">
              {categories?.map((category, i) => {
                // const Icon = el.icon;
                return (
                  <TabsTrigger
                    key={i}
                    value={category._id}
                    onClick={() => setActiveTab(category._id)}
                    className="p-0"
                  >
                    <div
                      className={`flex flex-col gap-1  items-center w-40 px-4 py-2 ${activeTab === category._id ? 'bg-blue-400 font-bold text-white' : ''}`}
                    >
                      {/* {Icon && <Icon size={40} />} */}
                      <div>{category.name}</div>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {categories?.map((category, i) => {
              return (
                <TabsContent
                  value={category._id}
                  key={i}
                  className="w-full py-4"
                >
                  <div className="flex flex-wrap gap-6 max-w-screen-sm">
                    {category.subCategories.map((subCategory, i) => {
                      return (
                        <div
                          className="hover:bg-blue-200 w-fit px-8 text-sm py-2 rounded-full border border-black font-bold cursor-pointer"
                          key={i}
                        >
                          {subCategory.subCategoryName}
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

'use client';
import { Container } from '../assets/Container';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Armchair, Car, Drill, House } from 'lucide-react';

const assemblyData = [
  'IKEA-н тавилга',
  'Ширээ угсралт',
  'Шүүгээ угсралт',
  'Ор угсралт',
];
const mountingData = [
  'Зураг, толь тогтоолт',
  'Tелевиз тогтоолт',
  'Цонх, хөшиг тогтоолт',
  'Ханын тавиур тогтоолт',
];
const cleaningData = [
  'Орон сууцны цэвэрлэгээ',
  'Үдэшлэгийн дараах цэвэрлэгээ',
  'Гараж цэвэрлэгээ',
  'Нүүлгэлтийн цэвэрлэгээ',
  'Гүн цэвэрлэгээ',
];
const movingData = [
  'Нүүлгэлтийн туслах',
  'Машинтай нүүлгэлт',
  'Хог, тавилга устгал',
  'Хүнд өргөлт,нүүлгэлт',
  'Тавилгын байршил өөрчлөх',
];

export const PopularServices = () => {
  const [activeTab, setActiveTab] = useState('assembly');
  const data = [
    {
      data: assemblyData,
      value: 'assembly',
      name: 'Тавилга угсралт',
      icon: Armchair,
      color: 'text-blue-300 font-bold',
    },
    {
      data: mountingData,
      value: 'mounting',
      name: 'Өрөмдөлт, тогтоолт',
      icon: Drill,
      color: 'text-green-300 font-bold',
    },
    {
      data: cleaningData,
      value: 'cleaning',
      name: 'Цэвэрлэгээ',
      icon: House,
      color: 'text-purple-300 font-bold',
    },
    {
      data: movingData,
      value: 'moving',
      name: 'Нүүлгэлт',
      icon: Car,
      color: 'text-amber-300 font-bold',
    },
  ];

  return (
    <Container className="bg-white">
      <div></div>
      <div className="mt-4"></div>
      <div>
        PopularServices
        <div className="flex gap-10 justify-center">
          <Tabs defaultValue="assembly" className="w-fit">
            <TabsList className="h-fit flex border-b border-black">
              {data.map((el, i) => {
                const Icon = el.icon;
                return (
                  <TabsTrigger
                    key={i}
                    value={el.value}
                    onClick={() => setActiveTab(el.value)}
                  >
                    <div
                      className={`flex flex-col gap-1 items-center w-40 ${activeTab === el.value ? el.color : ''}`}
                    >
                      {Icon && <Icon size={40} />}
                      <div>{el.name}</div>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {data?.map((el, i) => {
              return (
                <TabsContent value={el.value} key={i} className="w-full py-4">
                  <div className="flex flex-wrap gap-6 max-w-screen-md">
                    {el.data?.map((item, index) => {
                      return (
                        <div
                          className="hover:bg-green-100 w-fit px-10 py-2 rounded-full border border-black font-bold cursor-pointer"
                          key={index}
                        >
                          {item}
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

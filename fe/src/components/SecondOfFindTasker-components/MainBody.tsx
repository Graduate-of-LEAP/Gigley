import { useEffect, useState } from 'react';
import { Container } from '../assets/Container';
import { TaskerProfileCard } from '../assets/TaskerProfileCard';
import { FilterSideBar } from './FilterSideBar';
import { SortedBy } from './SortedBy';
import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

export const MainBody = () => {
  const [allTasker, setAllTasker] = useState<Tasker[]>([]);
  console.log(allTasker, 'ene bol taskers');

  const getAllTaskerData = async () => {
    try {
      const response = await api.get('/getAllTasker/taskers');

      console.log(response.data, 'ress');
      setAllTasker(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTaskerData();
  }, []);
  return (
    <Container className="bg-[#f4f7f6] h-fit">
      <SortedBy />
      <div className="flex gap-x-6 justify-center">
        <FilterSideBar />

        <TaskerProfileCard />
      </div>
    </Container>
  );
};

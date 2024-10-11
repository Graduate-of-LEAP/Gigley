import { Header } from '@/components/assets/Header';
import { TaskerDetailedProfileCard } from '@/components/assets/TaskerDetailedProfileCard';
import { DescriptionOfSecond } from '@/components/SecondOfFindTasker-components/DescriptionOfSecond';
import { FilterSideBar } from '@/components/SecondOfFindTasker-components/FilterSideBar';
import { SortedBy } from '@/components/SecondOfFindTasker-components/SortedBy';
import { ChooseDateAndTime } from '@/components/ThirdOfFindTasker-components/ChooseDateAndTime';

export default function () {
  return (
    <>
      <Header />
      <DescriptionOfSecond />
      <SortedBy />
      <FilterSideBar />
      <TaskerDetailedProfileCard />
      <ChooseDateAndTime />
    </>
  );
}

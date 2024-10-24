import { Header } from '@/components/assets/Header';
import { TaskerDetailedProfileCard } from '@/components/assets/TaskerDetailedProfileCard';
import { TaskerProfileCard } from '@/components/assets/TaskerProfileCard';
import { DescriptionOfSecond } from '@/components/SecondOfFindTasker-components/DescriptionOfSecond';
import { FilterSideBar } from '@/components/SecondOfFindTasker-components/FilterSideBar';
import { MainBody } from '@/components/SecondOfFindTasker-components/MainBody';
import { SortedBy } from '@/components/SecondOfFindTasker-components/SortedBy';
import { ChooseDateAndTime } from '@/components/ThirdOfFindTasker-components/ChooseDateAndTime';

export default function () {
  return (
    <>
      <Header />
      <DescriptionOfSecond />
      <MainBody />

      <ChooseDateAndTime />
    </>
  );
}

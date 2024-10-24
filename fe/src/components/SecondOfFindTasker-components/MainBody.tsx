import { Container } from '../assets/Container';
import { TaskerProfileCard } from '../assets/TaskerProfileCard';
import { FilterSideBar } from './FilterSideBar';
import { SortedBy } from './SortedBy';

export const MainBody = () => {
  return (
    <Container className="bg-[#f4f7f6] h-screen">
      <SortedBy />
      <div className="flex gap-x-6 justify-center">
        <FilterSideBar />
        <TaskerProfileCard />
      </div>
    </Container>
  );
};

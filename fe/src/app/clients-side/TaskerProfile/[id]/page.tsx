import { useParams } from 'next/navigation';

import { Container } from '@/components/assets/Container';
import { TaskerAboutMe } from '@/components/TaskerProfile/AboutMe';
import { TaskerSkills } from '@/components/TaskerProfile/TaskerSkills';
import { SelectAndContinue } from '@/components/TaskerProfile/SelectAndContiune';
import { TaskerSkillCard } from '@/components/TaskerProfile/TaskerSkillCard';

export const TaskerProfile = () => {
  return (
    <Container className="bg-white">
      <div className="h-fit w-full flex gap-6  bg-white ">
        <div className="flex flex-col">
          <TaskerAboutMe />
          <TaskerSkills />
        </div>
        <div className="flex flex-col">
          <SelectAndContinue />
          <TaskerSkillCard />
        </div>
      </div>
    </Container>
  );
};

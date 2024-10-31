import { useParams } from 'next/navigation';
import { Container } from '../../assets/Container';
import { TaskerAboutMe } from '../../TaskerProfile/AboutMe';
import { SelectAndContinue } from '../../TaskerProfile/SelectAndContiune';
import { TaskerSkillCard } from '../../TaskerProfile/TaskerSkillCard';
import { TaskerSkills } from '../../TaskerProfile/TaskerSkills';

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

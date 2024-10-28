import { Container } from '../assets/Container';
import { TaskerAboutMe } from './AboutMe';
import { SelectAndContinue } from './SelectAndContiune';
import { TaskerSkillCard } from './TaskerSkillCard';
import { TaskerSkills } from './TaskerSkills';

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

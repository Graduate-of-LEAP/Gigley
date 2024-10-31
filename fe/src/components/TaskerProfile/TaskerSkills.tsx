import { WorkDetail } from '@/app/tasker-side/TaskerDashboard/page';
import { Container } from '../assets/Container';
import { FaAngleRight } from 'react-icons/fa';

type TaskerSkillsProps = {
  workDetails: WorkDetail[]; 
};

export const TaskerSkills = ({ workDetails }: TaskerSkillsProps) => {
  return (
    <Container className="bg-white">
      <div className="w-[378px] h-auto border mt-6 mb-6">
        <h2 className="text-xl p-6 border border-b-green-600">
          Миний чадварууд
        </h2>

        {workDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center w-full p-6 border border-b-green-600 justify-between"
          >
            <h2 className="text-[18px]">{detail.taskName || detail.skills || 'Unknown Skill'}</h2>
            <FaAngleRight className="w-[18px] h-[18px]" />
          </div>
        ))}
      </div>
    </Container>
  );
};

import { Container } from '../assets/Container';
import { FaAngleRight } from 'react-icons/fa';

const skills = [
  'Appliance Installation & Repairs',
  'Babyproofing',
  'Branch & Hedge Trimming',
  'Door, Cabinet, & Furniture Repair',
  'Electrical Help',
  'Errands',
  'Flooring & Tiling Help',
  'Full Service Help Moving',
  'Furniture Assembly',
  'General Mounting',
  'Heavy Lifting & Loading',
  'Help Moving',
];

export const TaskerSkills = () => {
  return (
    <Container className="bg-white">
      <div className="w-[378px] h-auto border mt-6 mb-6">
        <h2 className="text-xl p-6 border border-b-green-600">
          Миний чадварууд
        </h2>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center w-full p-6 border border-b-green-600 justify-between "
          >
            <h2 className="text-[18px]">{skill}</h2>
            <FaAngleRight className="w-[18px] h-[18px]" />
          </div>
        ))}
      </div>
    </Container>
  );
};

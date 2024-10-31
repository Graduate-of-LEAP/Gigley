import Image from 'next/image';
import { Container } from '../assets/Container';
import { FaMedal, FaStar, FaCalendarCheck } from 'react-icons/fa';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { FaShield } from 'react-icons/fa6';

interface TaskerAboutMeProps {
  tasker: Tasker;
}

export const TaskerAboutMe = ({ tasker }: TaskerAboutMeProps) => {
  return (
    <Container className="bg-white">
      <div className="h-fit w-[380px] flex flex-col bg-white">
        <div className="h-[170px] w-full border rounded p-6 flex gap-4">
          <Image
            src="/picture/profile.png" // Ensure you have the correct image source
            alt={`${tasker.firstName} ${tasker.lastName}`}
            width={120}
            height={120}
            className="rounded"
          />
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-xl">{tasker.firstName}</h2>
            <div className="flex items-center gap-1">
              <FaMedal />
              <p className="text-purple-300">Элит Tasker</p>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-300" />
              <p>5.0 (1957 сэтгэгдэл)</p>
            </div>
            <p>Нийт 3277 даалгавар</p>
          </div>
        </div>
        <div className="w-full h-fit p-6 flex flex-col mt-4 border">
          <h2 className="font-bold text-xl">Миний тухай</h2>
          <p className="text-[16px] pt-2">
            Сайн уу! Би танд туслахад бэлэн байна! Би ажил хийж, хүмүүсийг
            баярлуулах дуртай.
          </p>
          <div className="border-t-2 mt-4"></div>
          <p>{tasker.location} ажилладаг</p>
          <div className="flex items-center gap-1 mt-2">
            <FaShield className="text-green-300" />
            <p>ID баталгаажуулсан</p>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <FaCalendarCheck className="text-green-300" />
            <p>2018 оноос хойш tasker</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

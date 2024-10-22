import { Container } from '../assets/Container';
import { FaListCheck } from 'react-icons/fa6';

export const DescriptionOfFourth = () => {
  return (
    <Container className="bg-white">
      <div className="h-[85px] w-full flex justify-center bg-white border">
        <div className="flex items-center">
          <FaListCheck className="w-[24px] h-6 mr-2" />
          <p>
            Та бараг дууслаа! Таныг Tasker-тай холбохын тулд бидэнд хэдхэн
            дэлгэрэнгүй мэдээлэл хэрэгтэй байна.
          </p>
        </div>
      </div>
    </Container>
  );
};

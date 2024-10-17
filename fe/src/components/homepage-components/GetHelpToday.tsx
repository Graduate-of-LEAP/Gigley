import { Container } from '../assets/Container';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
  'Ерөнхий суурилуулалт',
  'ТВ суурилуулах',
  'Tавилга угсралт',
  'IKEA Tавилга угсралт',
  'Нүүлгэлт',
  'Гэр цэвэрлэгээ',
  'Хашааны ажил',
  'Тавилга салгах',
  '3үлэг арчилгаа',
  'Зураг хананд өлгөх',
  'Гэрийн тавилга зөөх',
  'Tавиур суурилуулах',
  'Цахилгааны ажил',
  ' Сантехник',
];

export const GetHelpToday = () => {
  return (
    <Container className="bg-white">
      <div className="h-[516px] bg-white">
        <div className="flex flex-col justify-between  py-[88px] px-[24px]">
          <h1 className="text-3xl text-[#2B4C32] font-bold ">
            Өнөөдөр тусламж аваарай
          </h1>

          <div className="flex flex-wrap mt-[48px]">
            {categories.map((category, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded-full py-2 px-4 m-2 text-gray-700"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex mt-20  items-center text-center">
            <p className="mr-1 text-[#0D7A5F]">Бүх үйлчилгээг харах</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Container>
  );
};

import { Container } from '../assets/Container';
import { Input } from '@/components/ui/input';
import { FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

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

export const BookYourNextTask = () => {
  return (
    <Container className="bg-white">
      <div className="h-[451px] bg-white py-[80px]">
        <div className="flex flex-col  ">
          <h1 className="text-[32px] flex justify-center">
            Дараагийн даалгавраа захиалаарай.
          </h1>

          <div className="flex justify-center mt-2 items-center rounded   ">
            <Input
              className="w-[800px] h-[46px] ml-2       "
              placeholder="Describe one task, eg. fix the hole in my wall "
            />

            <Button
              type="submit"
              className="bg-[#1167b1] rounded-r-full h-[42px] w-[40 px]"
            >
              <FaSearch className="text-white text-lg" />
            </Button>
          </div>

          <div className="flex flex-wrap mt-[48px]">
            {categories.map((category, index) => (
              <button
                key={index}
                className="border hover:bg-green-100 border-gray-300 rounded-full py-2 px-4 m-2 text-gray-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

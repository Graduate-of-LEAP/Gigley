import { Container } from '../assets/Container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaSearch } from 'react-icons/fa';

export const HeroSection = () => {
  //Assembly service provided for , Book trusted help for home tasks , search bar
  return (
    <Container className="bg-white">
      <div className="h-[250px]">
        <div className="w-[1200px] h-[154px] flex flex-col justify-center items-center">
          <h1 className="text-[55px] text-[#2b4c32] font-bold w-[550px] leading-tight text-center">
            Таний итгэж болох гэрийн туслах
          </h1>
        </div>
        <div className="flex justify-center items-center mt-16">
          <Input
            type="text"
            placeholder="Та шаардлагатай үйлчилгээгээ хайна уу"
            name="search"
            className="w-[541px] h-[64px] rounded-s-full border border-[#2b4c32]"
          />
          <Button
            type="submit"
            className="bg-[#2b4c32] rounded-r-full h-[64px] w-[88px]"
          >
            <FaSearch className="text-white text-lg" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

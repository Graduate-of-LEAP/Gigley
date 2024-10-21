import { Container } from '../assets/Container';
import Image from 'next/image';

export const YourTodoList = () => {
  return (
    <Container className="relative w-screen h-[420px]">
      <Image
      src="/picture/Handy.png"
      alt="Background"
      layout="fill"
      objectFit="cover"
      />
      <div className="absolute mt-[200px] ml-[300px]">
        <p className="font-bold text-4xl text-white w-[500px] text-center font">Та хийхээр төлөвлөж байгаа ажилаа бидэнд даатга</p></div>
    </Container>
  );
};

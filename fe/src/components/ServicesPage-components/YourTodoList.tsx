import { Container } from '../assets/Container';
import Image from 'next/image';

export const YourTodoList = () => {
  return (
    <Container className="relative w-screen h-[420px] flex items-center justify-center">
      <Image
        src="/picture/Handy.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center space-y-3 font-bold text-4xl text-white ">
        <p className="">Хийхээр төлөвлөж буй ажлаа</p>
        <p>бидэнд даатгаарай</p>
      </div>
    </Container>
  );
};

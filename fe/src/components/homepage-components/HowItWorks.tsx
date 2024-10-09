import Image from 'next/image';
import { Container } from '../assets/Container';

const data = [
  {
    img: '/picture/how-it-works',
  },
];

export const HowItWorks = () => {
  return (
    <Container className="bg-[#FFFCE4] ">
      <div className="h-fit bg-[#FFFCE4] ">
        <div className="border py-12 pl-40 relative ">
          <Image
            src="/picture/how-it-works.png"
            height={494}
            width={950}
            alt="how it works"
          />

          <div className="bg-white w-[393px] h-fit px-6 pl-16 pr-9 py-16 rounded-lg absolute top-[80px] left-[56px]">
            <h1 className="text-2xl font-bold">How it works</h1>
            <div className="flex flex-col gap-y-6 mt-10">
              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#D7D7FD] rounded-full text-2xl font-bold">
                  1
                </div>
                <div>Choose a Tasker by price, skills, and reviews.</div>
              </div>

              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#FFFCE4] rounded-full text-2xl font-bold">
                  2
                </div>
                <div>Choose a Tasker by price, skills, and reviews.</div>
              </div>

              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#E3FFEF] rounded-full text-2xl font-bold">
                  3
                </div>
                <div>Choose a Tasker by price, skills, and reviewsa.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

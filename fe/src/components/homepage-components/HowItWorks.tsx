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
        <div className=" py-20 pl-40 relative ">
          <Image
            src="/picture/how-it-works.png"
            height={500}
            width={1000}
            alt="how it works"
          />

          <div className="bg-white w-[400px] h-fit px-6 pl-16 pr-9 py-16 rounded-lg absolute top-[120px] left-[56px] ">
            <h1 className="text-2xl font-bold">
              gigLEY-с та хэрхэн үйлчилгээ авах вэ{' '}
            </h1>
            <div className="flex flex-col gap-y-6 mt-10">
              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#D7D7FD] rounded-full text-2xl font-bold">
                  1
                </div>
                <div>
                  Ур чадвар, сэтгэгдэлүүд болон үнийн тарифтай танилцаад
                  туслагчаа сонгоорой.
                </div>
              </div>

              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#FFFCE4] rounded-full text-2xl font-bold">
                  2
                </div>
                <div>Сонгосон туслагчтайгаа цагаа тохиролцоорой.</div>
              </div>

              <div className="flex gap-x-6 items-center ">
                <div className="px-[22px] py-3 bg-[#E3FFEF] rounded-full text-2xl font-bold">
                  3
                </div>
                <div>
                  Холбогдох, төлбөр тооцоогоо хийх, сэтгэгдэлүүдтэй танилцах
                  зэрэг бүгдийг нэг доороос.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

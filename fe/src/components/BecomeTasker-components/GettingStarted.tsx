import Image from 'next/image';
import { Container } from '../assets/Container';

import { DuruvIcon } from '../assets/icons/DuruvIcon';

import { GuravIcon } from '../assets/icons/GuravIcon';
import { HoyrIcon } from '../assets/icons/HoyrIcon';
import { TavIcon } from '../assets/icons/TavIcon';
import { ZurgaaIcon } from '../assets/icons/ZurgaaIcon';
import { HoyrTseg } from '../assets/icons/hoyrtseg';
import { AddIcon } from '../assets/icons/AddIcon';

export const GettingStarted = () => {
  return (
    <Container className="bg-white ">
      <div className="h-fit flex flex-col  bg-white ">
        <div className="flex w-full h-[90px] items-center justify-center mt-20 ">
          <div className="flex items-center justify-center h-0.5 w-16 bg-[#0d7a5f]">
            {' '}
          </div>

          <div className="h-3 w-3 bg-[#0d7a5f] rounded-full mx-2"></div>

          <div className="flex items-center justify-center h-0.5 w-16 bg-[#0d7a5f]">
            {' '}
          </div>
        </div>
        <div className="font-bold text-4xl  flex items-center justify-center mt-10  ">
          Эхлэх
        </div>

        <div className="flex flex-wrap justify-between mt-20">
          <div className="flex flex-col justify-between h-[200px] w-[400px] mb-20">
            <AddIcon />
            <h2 className="text-[28px] font-bold">1. Бүртгүүлэх</h2>
            <p className="text-[18px]">
              Бүртгэлээ үүсгэ. Дараа нь бүртгэлийг үргэлжлүүлэхийн тулд Gigley
              аппаа татаж аваарай.
            </p>
          </div>

          <div className="flex flex-col justify-between h-[200px] w-[400px] mb-20 ">
            <HoyrIcon />
            <h2 className="text-[28px] font-bold">
              2. Өөрийн профайлыг бий болгох
            </h2>
            <p className="text-[18px]">
              Ямар үйлчилгээ, хаана санал болгохоо сонго.
            </p>
          </div>

          <div className="flex flex-col justify-between h-[240px] w-[400px] ">
            <GuravIcon />
            <h2 className="text-[28px] font-bold">
              3. Даалгавар авах эрхээ баталгаажуулна уу
            </h2>
            <p className="text-[18px]">
              Шаардлагатай бол хувийн мэдээллээ баталгаажуулж, бизнесийн
              баталгаажуулалтыг илгээнэ үү.
            </p>
          </div>

          <div className="flex flex-col justify-between h-[188px] w-[400px]">
            <DuruvIcon />
            <h2 className="text-[28px] font-bold">
              4. Бүртгэлийн хураамж төлнө
            </h2>
            <p className="text-[18px">
              Холбогдох хотуудад бид 25 долларын бүртгэлийн хураамж авдаг бөгөөд
              энэ нь танд хамгийн сайн үйлчилгээг үзүүлэхэд тусалдаг.
            </p>
          </div>

          <div className="flex flex-col justify-between h-[188px] w-[400px]">
            <TavIcon />
            <h2 className="text-[28px] font-bold">
              5. Цагийн хуваарь болон ажлын бүсээ тохируул
            </h2>
            <p className="text-[18px">
              Долоо хоног бүр бэлэн байх хугацааг тохируулж, нэг өдрийн ажилд
              орохыг сонгоорой.
            </p>
          </div>

          <div className="flex flex-col justify-between h-[188px] w-[400px]">
            <ZurgaaIcon />
            <h2 className="text-[28px] font-bold">
              6. Ажлын байртай болж эхэлцгээе
            </h2>
            <p className="text-[18px">Өөрийнхөөрөө бизнесээ хөгжүүл.</p>
          </div>
        </div>
        <div className="flex mt-20  ">
          <div className="flex flex-col w-[400px]  justify-center ">
            <HoyrTseg />

            <h3 className="text-[28px]">
              Би Gigley-д дуртай! Би өрнөөсөө гарч, төлбөр тооцоогоо шийдэж, гэр
              бүлээ тэжээж, ирээдүйн зорилгодоо хуримтлуулах хангалттай орон
              зайтай болсон.
            </h3>
            <p className="text-[18px] mt-1 ">Халиун, Улаан Баатар, УБ</p>
          </div>

          <div>
            <Image
              src="/picture/ineegch.png"
              alt="footer-appstore"
              width={800}
              height={471}
            />
          </div>
        </div>

        <div className="flex w-full h-[90px] items-center justify-center mt-20 mb-5  ">
          <div className="flex items-center justify-center h-0.5 w-16 bg-[#0d7a5f]">
            {' '}
          </div>

          <div className="h-3 w-3 bg-[#0d7a5f] rounded-full mx-2"></div>

          <div className="flex items-center justify-center h-0.5 w-16 bg-[#0d7a5f]">
            {' '}
          </div>
        </div>
      </div>
    </Container>
  );
};

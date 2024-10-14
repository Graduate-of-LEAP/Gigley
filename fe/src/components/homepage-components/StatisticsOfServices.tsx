import Image from 'next/image';
import { Container } from '../assets/Container';

export const StatisticsOfServices = () => {
  return (
    <Container className="bg-[#EEF8F1]">
      <div className="h-[188px] bg-[#EEF8F1]c">
        <div className="flex h-full  items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Тавилгын угсралт:</h3>
            <h2 className="text-[#0D7A5F] text-2xl font-extrabold ">
              3.4 cая +{' '}
            </h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Боломжит ажилууд:</h3>
            <h2 className="text-[#0D7A5F] text-2xl font-extrabold ">
              1.5 cая +{' '}
            </h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Эд зүйлсийг суурилуулсан:</h3>
            <h2 className="text-[#0D7A5F] text-2xl font-extrabold ">
              1.0 cая +{' '}
            </h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Гэрийн засвар:</h3>
            <h2 className="text-[#0D7A5F] text-2xl font-extrabold ">
              700,000 +{' '}
            </h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Гэрийн цэвэрлэгээ:</h3>
            <h2 className="text-[#0D7A5F] text-2xl font-extrabold ">
              890.000+{' '}
            </h2>
          </div>

          <Image
            className="mr-2"
            src="/picture/ikea.png"
            alt="footer-appstore"
            width={100}
            height={50}
          />
        </div>
      </div>
    </Container>
  );
};

import Image from 'next/image';
import { Container } from '../assets/Container';
import { FaStar } from 'react-icons/fa';

export const PartnerWithIkea = () => {
  return (
    <Container className="bg-[#F9FAFB] ">
      <div className="h-[108px] flex justify-between items-center px-2 ">
        <div className="flex items-center ">
          <FaStar className="text-yellow-300 h-6 w-6" />
          <FaStar className="text-yellow-300 h-6 w-6" />
          <FaStar className="text-yellow-300 h-6 w-6" />
          <FaStar className="text-yellow-300 h-6 w-6" />
          <FaStar className="text-yellow-300 h-6 w-6" />
          <h1 className="text-[24px] ml-1   "> 1.1 cая хэрэглэгч</h1>
        </div>

        <div className="flex items-center">
          <Image
            src="/picture/newIkea.png"
            alt="ikea"
            width={119}
            height={44}
          />

          <h1 className="text-[24px">IKEA-тай хамтран ажилласан</h1>
        </div>

        <div className="flex items-center gap-x-2">
          <Image
            src="https://www.taskrabbit.com/_next/static/media/download-ios.6f846953.svg"
            alt="footer-appstore"
            width={140}
            height={50}
          />

          <Image
            src="https://www.taskrabbit.com/_next/static/media/google-play.e0aec133.svg"
            alt="footer-appstore"
            width={150}
            height={50}
          />
        </div>
      </div>
    </Container>
  );
};

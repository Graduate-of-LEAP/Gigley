import Image from 'next/image';
import { Container } from '../assets/Container';
import { FaStar } from 'react-icons/fa';

export const PartnerWithIkea = () => {
  return (
    <Container className="bg-white">
      <div className="h-[108px] flex justify-between items-center px-2 bg-[#F9FAFB]">
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

        <div className="flex items-center">
          <Image
            src="/picture/appstore.png"
            alt="footer-appstore"
            width={150}
            height={50}
          />

          <Image
            src="/picture/google.png"
            alt="footer-appstore"
            width={150}
            height={50}
          />
        </div>
      </div>
    </Container>
  );
};

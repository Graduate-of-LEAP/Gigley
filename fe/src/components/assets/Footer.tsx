import { Container } from './Container';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export const Footer = () => {
  return (
    <Container className="bg-[#67727E]">
      <div className="flex flex-col w-full h-[283.81px] bg-[#67727E] ">
        <div className="flex h-[26px] items-center  mt-4 px-4">
          <p className="mr-2 text-[#b1b9c3] font-bold text-[18px]">
            Биднийг дагаaрай:
          </p>
          <div className="flex text-center gap-2 text-white cursor-pointer">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex h-full px-4  justify-between">
          <div className="flex flex-col">
            <p className="text-[#b1b9c3] mt-4 text-[18px]">Боломжууд</p>
            <ul className="flex flex-col gap-2 text-start text-white font-semibold cursor-pointer">
              <li>Компани</li>
              <li>Карьер</li>
              <li>Ажил авах</li>
              <li>Холбогдох утас</li>
              <li>Үйлчилгээнүүд</li>
              <li>Шилдэг ажилчин</li>
            </ul>
          </div>
          <div>
            <p className="text-[#b1b9c3] mt-4 text-[18px]">Company</p>
            <ul className="flex flex-col gap-2 text-start  text-white font-semibold cursor-pointer">
              <li>Бидний тухай</li>
              <li>Кареер</li>
              <li>Нууцлалын бодлого</li>
            </ul>
          </div>

          <div>
            <p className="text-[#b1b9c3] mt-4 text-[18px]">Апп татах</p>
            <ul className="flex flex-col gap-2 text-start  text-white">
              <li>
                Манай гар утасны аппликейшнийг ашиглан хаана ч байсан хийх{' '}
                <br />
                ажлынхаа жагсаалтаа шийдээрэй
              </li>

              <div className="flex flex-col gap-4 mt-2 pl-16   ">
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
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

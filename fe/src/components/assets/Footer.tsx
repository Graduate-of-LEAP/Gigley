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
          <p className="mr-2 text-[#b1b9c3]">Биднийг дагахыг хүсвэл:</p>
          <div className="flex text-center gap-2 ">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex h-full px-4  justify-between">
          <div className="flex flex-col">
            <p className="text-[#b1b9c3] mt-4">Боломжууд</p>
            <ul className="flex flex-col gap-2 text-start">
              <li>Компани</li>
              <li>Карьер</li>
              <li>Ажил авах</li>
              <li>Холбогдох утас</li>
              <li>Үйлчилгээнүүд</li>
              <li>Шилдэг ажилчин</li>
            </ul>
          </div>
          <div>
            <p className="text-[#b1b9c3] mt-4">Company</p>
            <ul className="flex flex-col gap-2 text-start">
              <li>Бидний тухай</li>
              <li>Кареер</li>
              <li>Нууцлалын бодлого</li>
            </ul>
          </div>

          <div>
            <p className="text-[#b1b9c3] mt-4">Апп татах</p>
            <ul className="flex flex-col gap-2 text-start">
              <li>
                Манай гар утасны аппликейшнийг ашиглан хаана ч байсан хийх{' '}
                <br />
                ажлынхаа жагсаалтаа шийдээрэй
              </li>

              <div className="flex gap-4 mt-2   items-start">
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
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

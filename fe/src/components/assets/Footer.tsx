import { Container } from './Container';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Container className="bg-red-700">
      <div className="flex flex-col w-full h-[283.81px] bg-[#67727E] ">
        <div className="flex h-[26px] items-center  mt-4 px-4">
          <p className="mr-1 text-[#b1b9c3]">Follow us! We're friendly:</p>
          <div className="flex text-center gap-2 ">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex h-full px-4  gap-20">
          <div className="flex flex-col">
            <p className="text-[#b1b9c3] mt-4">About Us</p>
            <ul className="flex flex-col gap-2 text-start">
              <li>Company</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-[#b1b9c3] mt-4">Company</p>
            <ul className="flex flex-col gap-2 text-start">
              <li>Бидний тухай</li>
              <li>Кареер</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

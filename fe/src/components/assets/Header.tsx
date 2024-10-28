import Link from 'next/link';
import { Container } from './Container';

export const Header = () => {
  return (
    <Container className="bg-white ">
      <div className="h-[70px]  flex justify-between items-center  border-b border-gray-500">
        <p className="font-bold text-3xl">GiGley</p>
        <div className="flex items-center gap-4 font-medium">
          <p>Үйлчилгээ</p>

          <div className="flex items-center gap-4 font-medium ">
            <Link href="/clients-side/RegisterTaskerAndUser">
              <p className="hover:text-[#1167b1] cursor-pointer">Бүртгүүлэх</p>
            </Link>
            <span>|</span>
            <Link href="/clients-side/Login-tasker-user">
              <p className="hover:text-[#1167b1] cursor-pointer">Нэвтрэх</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

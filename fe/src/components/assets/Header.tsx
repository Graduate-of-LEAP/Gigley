'use client';
import Link from 'next/link';
import { Container } from './Container';
import { useAuth } from '../context/auth.customerProvider';
import { toast } from 'react-toastify';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { LogOut, UserRoundPen } from 'lucide-react';

export const Header = () => {
  const { user, setUser } = useAuth();

  const logOut = async () => {
    try {
      localStorage.removeItem('token');
      setUser(undefined);
      toast.error('Амжилттай гарлаа');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="bg-white ">
      <div className="h-[70px]  flex justify-between items-center  border-b border-gray-500">
        <Link href={'/'}>
          <p className="font-bold text-3xl">GiGley</p>
        </Link>
        <div className="flex items-center gap-4 font-medium">
          <Link
            href="/clients-side/ServicesPage"
            className="cursor-pointer hover:text-[#1167b1]"
          >
            <p>Үйлчилгээ</p>
          </Link>
          <div className="flex items-center gap-4 font-medium">
            <Link
              href="/clients-side/RegisterTaskerAndUser"
              className={`${user ? 'hidden' : ''}`}
            >
              <p className="hover:text-[#1167b1] cursor-pointer">Бүртгүүлэх</p>
            </Link>
            <span>|</span>
            {user && (
              <div className="flex gap-4">
                <div>Hi, {user.userName}</div>
                <Popover>
                  <PopoverTrigger className="hover:text-[#1167b1]">
                    <UserRoundPen />
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col bg-white p-0 w-fit overflow-hidden">
                    <Link href={'/clients-side/UserAccount/Profile'}>
                      <div className="cursor-pointer hover:bg-[#1167b1] hover:text-white py-2 px-4">
                        Хэрэглэгчийн мэдээлэл
                      </div>
                    </Link>
                    <div
                      onClick={logOut}
                      className={`cursor-pointer hover:bg-[#1167b1] hover:text-white py-2 px-4 flex gap-2`}
                    >
                      <LogOut />
                      <div>Гарах</div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
            <Link
              href="/clients-side/Login-tasker-user"
              className={`${user ? 'hidden' : ''}`}
            >
              <p className="hover:text-[#1167b1] cursor-pointer">Нэвтрэх</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

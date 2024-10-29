'use client';
import Link from 'next/link';
import { Container } from './Container';
import { useAuth } from '../context/auth.customerProvider';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

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
        <p className="font-bold text-3xl">GiGley</p>
        <div className="flex items-center gap-4 font-medium">
          <p>Үйлчилгээ</p>

          <div className="flex items-center gap-4 font-medium">
            <Link
              href="/clients-side/RegisterTaskerAndUser"
              className={`${user ? 'hidden' : ''}`}
            >
              <p className="hover:text-[#1167b1] cursor-pointer">Бүртгүүлэх</p>
            </Link>
            <span>|</span>
            <div>{user?.userName}</div>
            <button
              className={`${user ? 'block' : 'hidden'} cursor-pointer py-1 px-3 border border-black rounded-full hover:bg-black hover:text-white`}
              onClick={logOut}
            >
              Log Out
            </button>
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

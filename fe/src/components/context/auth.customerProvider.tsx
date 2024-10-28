'use client';

import { api } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, PropsWithChildren, useContext } from 'react';
import { toast } from 'react-toastify';

type CustomerType = {
  id: string;
  userName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  phone: string;
};

type CustomerContextType = {
  // customer: CustomerType;
  login: (email: string, password: string) => Promise<void>;
  register: (
    userName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string
  ) => Promise<void>;
};

const AuthCustomerContext = createContext<CustomerContextType>(
  {} as CustomerContextType
);

export const AuthCustomerProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const register = async (
    userName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string
  ) => {
    try {
      const response = await api.post('/user/register', {
        email,
        password,
        userName,
        lastName,
        phoneNumber,
      });

      toast.success('Амжилттай бүртгэгдлээ! Та нэвтэрнэ үү.');

      router.push('/clients-side/Login');
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message || 'Бүртгэл амжилтгүй боллоо');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/user/login', { email, password });
      console.log(response, 'res');

      localStorage.setItem('token', response.data.token);

      toast.success('Амжилттай нэвтэрлээ');

      router.push('/');
    } catch (err: any) {
      console.log(err);
      if (err.response) {
        toast.error(err.response.data.message || 'Хэрэглэгч олдсонгүй');
      } else {
        toast.error('Сүлжээний алдаа');
      }
    }
  };

  return (
    <AuthCustomerContext.Provider value={{ register, login }}>
      {children}
    </AuthCustomerContext.Provider>
  );
};

export const useAuth = () => useContext(AuthCustomerContext);

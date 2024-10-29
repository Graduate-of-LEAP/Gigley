'use client';

import { api } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  getMe: () => void;
  user: CustomerType | undefined;
  setUser: (user: CustomerType | undefined) => void;
};

const AuthCustomerContext = createContext<CustomerContextType>(
  {} as CustomerContextType
);

export const AuthCustomerProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<CustomerType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
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
      getMe();
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
  const getMe = async () => {
    try {
      const res = await api.get('/user/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) return;

        const res = await api.get('/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthCustomerContext.Provider
      value={{ register, login, getMe, user, setUser }}
    >
      {children}
    </AuthCustomerContext.Provider>
  );
};

export const useAuth = () => useContext(AuthCustomerContext);
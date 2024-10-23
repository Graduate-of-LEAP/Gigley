'use client';

import { api } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';

type UserType = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    name: string,
    lastName: string,
    phone: string
  ) => Promise<void>;
};

const AuthTaskerContext = createContext<AuthContextType>({} as AuthContextType);

const authPaths = ['/TaskerLogin', '/TaskerRegister'];

type PropsChildren = {
  children: ReactNode;
  className?: string;
};

export const AuthTaskerProvider = ({ children }: PropsChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserType | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/authTasker/login', { email, password });

      localStorage.setItem('token', res.data.token);

      setUser(res.data.user);

      toast.success('Login successful');

      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (err: any) {
      console.log(err);
      toast.error('Invalid credentials');
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    lastName: string,
    phone: string
  ) => {
    try {
      await api.post('/authTasker/register', {
        name,
        email,
        password,
        lastName,
        phone,
      });

      toast.success('Registration successful! Please login.');

      setTimeout(() => {
        router.push('/tasker-side/TaskerLogin');
      }, 1000);
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message || 'Registration failed');
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem('token');

        if (!token) return;

        const res = await api.get('/authTasker/tasker', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(res, 'getme');

        setUser(res.data);
      } catch (err) {
        console.log('err:', err);
        localStorage.removeItem('token');
        toast.error('Your session has expired. Please login again.');
      } finally {
        setIsReady(true);
      }
    };

    loadUser();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (user) return;

    router.push('/tasker-side/TaskerLogin');
  }, [pathname, user, isReady]);

  if (!isReady) return null;

  return (
    <AuthTaskerContext.Provider value={{ user, login, register }}>
      {children}
    </AuthTaskerContext.Provider>
  );
};

export const useTaskerAuth = () => useContext(AuthTaskerContext);

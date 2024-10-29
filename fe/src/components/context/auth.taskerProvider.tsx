'use client';

import { api } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TaskerType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type AuthContextType = {
  tasker: TaskerType | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
  ) => Promise<void>;
  logout: () => void;
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

  const [tasker, setTasker] = useState<TaskerType | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/authTasker/login', { email, password });
      localStorage.setItem('token', res.data.token);

      toast.success('Login successful');

      setTimeout(() => {
        router.push('/tasker-side/CompleteProfile/GetStarted');
      }, 1000);
    } catch (err: any) {
      console.log(err);
      toast.error('Invalid credentials');
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string
  ) => {
    try {
      await api.post('/authTasker/register', {
        firstName,
        lastName,
        email,
        password,
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
    const loadTasker = async () => {
      try {
        setIsReady(false);

        const token = localStorage.getItem('token');

        if (!token) {
          setIsReady(true);
          return;
        }

        const res = await api.get('/tasker/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasker(res.data);
      } catch (err) {
        console.log('err:', err);
        localStorage.removeItem('token');
        toast.error('Your session has expired. Please login again');
      } finally {
        setIsReady(true);
      }
    };

    loadTasker();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;

    if (!isReady) return;

    if (tasker) return;

    // router.push('/tasker-side/TaskerLogin');
  }, [pathname, tasker, isReady]);

  if (!isReady) return null;

  const logout = () => {
    localStorage.removeItem('token');
    setTasker(null);
    toast.success('You have been logged out.');
    router.push('/tasker-side/TaskerLogin'); // Redirect to login page
  };

  return (
    <AuthTaskerContext.Provider value={{ tasker, login, register, logout }}>
      {children}
    </AuthTaskerContext.Provider>
  );
};

export const useTaskerAuth = () => useContext(AuthTaskerContext);

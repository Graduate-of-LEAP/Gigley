'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useTaskerAuth } from './context/auth.taskerProvider';

export const TaskerRegister = () => {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { register } = useTaskerAuth();

  console.log('firstName', firstName);

  return (
    <div className="relative w-screen h-screen ">
      <Image
        src="/picture/solo.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-center">
        <div className="w-[500px] h-[650px] rounded-lg bg-white absolute  mt-[200px] flex flex-col gap-5 px-16">
          <h1 className="font-bold text-5xl text-green-950 px-24 py-8">
            {' '}
            GiGley
          </h1>
          <h5 className="text-xl m-auto ">Become tasker</h5>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="FirstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Input
              placeholder="LastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <Input
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Phone number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input placeholder="Re-password" />
          </div>

          <Button
            variant="outline"
            className="h-[43px] w-[356px] rounded-full bg-green-800 text-white mt-6"
            onClick={() =>
              register(email, password, firstName, lastName, phone)
            }
          >
            Бүртгүүлэх
          </Button>
          <p className="text-base text-center mt-5">
            By clicking below and creating an account, I agree to TaskRabbit’s
            Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

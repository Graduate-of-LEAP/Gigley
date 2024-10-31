'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useTaskerAuth } from './context/auth.taskerProvider';

export const TaskerLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { login } = useTaskerAuth();

  return (
    <div className=" relative w-screen h-screen">
      <Image
        src="/picture/solo.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-center">
        <div className="w-[500px] h-fit rounded-lg bg-white absolute  mt-[200px] flex flex-col gap-5 px-16 p-8">
          <h1 className="font-bold text-5xl text-[#000238] text-center">
            {' '}
            gigLEY
          </h1>

          <h5 className="text-xl m-auto ">Please tasker log in</h5>
          <div>
            <Label htmlFor="Email">Email</Label>
            <Input
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <Label htmlFor="Email">Password</Label>
            <Input
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Button
            variant="outline"
            className="h-[43px] w-[356px] rounded-full bg-[#1167b1] text-white"
            onClick={() => login(email, password)}
          >
            Нэвтрэх
          </Button>
          <p className="text-base text-center mt-5">
            Did you purchase an assembly from IKEA or sign up via Facebook or
            Google? Create Password
          </p>
        </div>
      </div>
    </div>
  );
};

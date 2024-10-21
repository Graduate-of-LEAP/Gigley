'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';

export const TaskerLogin = () => {
  return (
    <div className=" relative w-screen h-screen">
      <Image
        src="/picture/solo.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-center">
        <div className="w-[500px] h-[430px] rounded-lg bg-white absolute  mt-[200px] flex flex-col gap-5 px-16">
          <h1 className="font-bold text-5xl text-green-950 px-24 py-6">
            {' '}
            GiGley
          </h1>
          <div>
            <Label htmlFor="Email">Email</Label>
            <Input placeholder="Email" />
          </div>

          <div>
            <Label htmlFor="Email">Email</Label>
            <Input placeholder="Password" />
          </div>

          <Button
            variant="outline"
            className="h-[43px] w-[356px] rounded-full bg-green-800 text-white"
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

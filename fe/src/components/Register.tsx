'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useAuth } from './context/auth.customerProvider';

export const Register = () => {
  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  console.log(userName);

  const { register } = useAuth();

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
          <h5 className="text-xl m-auto ">Become user</h5>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Name"
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <Input
              placeholder="LastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <Input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="Phone number"
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Input
              placeholder="Re-password"
              type="password"
              value={rePassword}
              onChange={(event) => setRePassword(event.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="h-[43px] w-[356px] rounded-full bg-[#1167b1] text-white mt-6"
            onClick={() =>
              register(userName, lastName, email, phoneNumber, password)
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

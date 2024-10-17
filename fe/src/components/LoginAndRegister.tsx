"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";




export const LoginAndRegister = () => {
  return (
    <div className="relative w-screen h-screen">
    <Image
      src="/picture/solo.png"
      alt="Background Image"
      layout="fill" 
      objectFit="cover" 
    />
    <div className="flex-1">
      <div className="w-[500px] h-[450px] rounded-lg bg-white absolute  mt-[200px] ml-[700px] flex flex-col gap-5 px-16">
        <h1 className="font-bold text-5xl text-green-950 px-24 py-8"> GiGley</h1>
      
     <Button variant="outline" className="h-[43px] w-[356px] rounded-full bg-green-800 text-white">Шинээх бүртгүүлэх</Button>
     <Button variant="outline" className="h-[43px] w-[356px] border border-green-800 text-green-800 rounded-full">Нэвтрэх</Button>
 
      <p className="text-base text-center mt-10">By signing up you agree to our Terms of Use and Privacy Policy.</p>
      </div>
      <div className="w-[500px] h-[450px] rounded-lg bg-white absolute  mt-[200px] ml-[100px] flex flex-col gap-5 px-16">
        <h1 className="font-bold text-5xl text-green-950 px-24 py-8"> GiGley</h1>
        <div>
        <Label htmlFor="Email">Email</Label>
      <Input placeholder="Email"/>
      </div>
      
      
      <div>
        <Label htmlFor="Email">Email</Label>
      <Input placeholder="Password"/>
      </div>
      
     <Button variant="outline" className="h-[43px] w-[356px] rounded-full bg-green-800 text-white">Нэвтрэх</Button>
      <p className="text-base text-center mt-5">Did you purchase an assembly from IKEA or sign up
      via Facebook or Google? Create Password</p>
      </div>


      <div className="w-[500px] h-[650px] rounded-lg bg-white absolute  mt-[200px] ml-[1300px] flex flex-col gap-5 px-16">
        <h1 className="font-bold text-5xl text-green-950 px-24 py-8"> GiGley</h1>
        <div className="flex flex-col gap-4">
        
      <Input placeholder="Name"/>
      <Input placeholder="LastName"/>
      <Input placeholder="Email address"/>
      <Input placeholder="Phone number"/>
      <Input placeholder="Password"/>
      <Input placeholder="Re-password"/>
      </div>
      
      
      
      
     <Button variant="outline" className="h-[43px] w-[356px] rounded-full bg-green-800 text-white">Бүртгүүлэх</Button>
      <p className="text-base text-center mt-5">By clicking below and creating an account, I agree to TaskRabbit’s Terms of Service and Privacy Policy.</p>
      </div>

    </div>
   
    </div>
    
  );
};

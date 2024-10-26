'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const LoginTaskerAndUser = () => {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/picture/solo.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-center">
        <div className="w-[500px] h-[380px] rounded-lg bg-white absolute  mt-[200px] flex flex-col gap-5 px-16">
          <h1 className="font-bold text-5xl text-green-950 px-24 py-10">
            {' '}
            GiGley
          </h1>

          <Link href="/clients-side/Login">
            <Button
              variant="outline"
              className="h-[43px] w-[356px] rounded-full bg-green-800 text-white"
            >
              Хэрэглэгчээр нэвтрэх
            </Button>
          </Link>

          <Link href="/tasker-side/TaskerLogin">
            <Button
              variant="outline"
              className="h-[43px] w-[356px] border border-green-800 text-green-800 rounded-full"
            >
              Гиглэгчээр нэвтрэх
            </Button>
          </Link>

          <div>
            <p className="text-base text-center mt-8">
              By signing up you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "./ui/input";
// import { Label } from "@radix-ui/react-label";

// export const LoginAndRegister = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="relative w-screen h-screen">
//       <Image
//         src="/picture/solo.png"
//         alt="Background Image"
//         layout="fill"
//         objectFit="cover"
//       />
//       <div className="flex justify-center items-center h-full">
//         <div className="w-[500px] h-[450px] rounded-lg bg-white flex flex-col gap-5 px-16">
//           <h1 className="font-bold text-5xl text-green-950 px-24 py-8">GiGley</h1>

//           {isLogin ? (
//             <>
//               <div>
//                 <Label htmlFor="login-email">Email</Label>
//                 <Input id="login-email" placeholder="Email" />
//               </div>
//               <div>
//                 <Label htmlFor="login-password">Password</Label>
//                 <Input id="login-password" placeholder="Password" type="password" />
//               </div>
//               <Button
//                 variant="outline"
//                 className="h-[43px] w-[356px] rounded-full bg-green-800 text-white"
//               >
//                 Нэвтрэх
//               </Button>
//               <p className="text-base text-center mt-5">
//                 Did you purchase an assembly from IKEA or sign up via Facebook or Google? Create Password
//               </p>
//               <Button
//                 variant="outline"
//                 className="h-[43px] w-[356px] border border-green-800 text-green-800 rounded-full"
//                 onClick={() => setIsLogin(false)}
//               >
//                 Шинээх бүртгүүлэх
//               </Button>
//             </>
//           ) : (
//             <>
//               <div>
//                 <Label htmlFor="signup-name">Name</Label>
//                 <Input id="signup-name" placeholder="Name" />
//               </div>
//               <div>
//                 <Label htmlFor="signup-lastname">Last Name</Label>
//                 <Input id="signup-lastname" placeholder="Last Name" />
//               </div>
//               <div>
//                 <Label htmlFor="signup-email">Email address</Label>
//                 <Input id="signup-email" placeholder="Email address" />
//               </div>
//               <div>
//                 <Label htmlFor="signup-phone">Phone number</Label>
//                 <Input id="signup-phone" placeholder="Phone number" />
//               </div>
//               <div>
//                 <Label htmlFor="signup-password">Password</Label>
//                 <Input id="signup-password" placeholder="Password" type="password" />
//               </div>
//               <div>
//                 <Label htmlFor="signup-repassword">Re-password</Label>
//                 <Input id="signup-repassword" placeholder="Re-password" type="password" />
//               </div>
//               <Button
//                 variant="outline"
//                 className="h-[43px] w-[356px] rounded-full bg-green-800 text-white"
//               >
//                 Бүртгүүлэх
//               </Button>
//               <p className="text-base text-center mt-5">
//                 By clicking below and creating an account, I agree to TaskRabbit’s Terms of Service and Privacy Policy.
//               </p>
//               <Button
//                 variant="outline"
//                 className="h-[43px] w-[356px] border border-green-800 text-green-800 rounded-full"
//                 onClick={() => setIsLogin(true)}
//               >
//                 Нэвтрэх
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

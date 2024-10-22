'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import { useState } from 'react';

export const AccountSideBar = () => {
  const pathname = usePathname();

  const account = [
    { title: 'Profile' },
    { title: 'Password' },
    { title: 'Account Security' },
    { title: 'Notifications' },
    { title: 'Billing Info' },
    { title: 'Cancel a Task' },
    { title: 'Business Information' },
    { title: 'Account Balance' },
    { title: 'Transactions' },
    { title: 'Delete Account' },
  ];

  const formatTitleToPath = (title: string): string => {
    return title.replace(/\s+/g, '-');
  };

  return (
    <div>
      {account.map((item, index) => (
        <Link
          key={index}
          href={`/clients-side/UserAccount/${formatTitleToPath(item.title)}`}
        >
          <div
            className={`w-[300px] font-bold text-base px-4 cursor-pointer py-2 my-[3px] border-l-2 border-white  text-[#1167b1]${pathname.includes(formatTitleToPath(item.title)) ? 'text-[#404642] bg-[#f8fafc] border-[#3d473b]' : ''}`}
          >
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

// const convertToEnglishPath = (title: string) => {
//   const mappings: { [key: string]: string } = {
//     Профайл: 'Profile',
//     'Нууц үг': 'Password',
//     'Аюулгүй байдал': 'Account-security',
//     Мэдэгдэл: 'Notifications',
//     'Тооцооны мэдээлэл': 'Billing-info',
//     'Цуцлагдсан ажил': 'Cancel-a-task',
//     'Business Information': 'Business-info',
//     'Дансны үлдэгдэл': 'Account-balance',
//     Гүйлгээ: 'Transactions',
//     'Бүртгэл устгах': 'Delete-account',
//   };

//   return mappings[title] || title.toLowerCase().replace(/\s+/g, '-');
// };

'use client';

import Link from 'next/link';
import { Container } from '../assets/Container';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

export const OpportunitySection = () => {
  const [tasker, setTasker] = useState<Tasker>();
  const [authorization, setAuthorization] = useState<string | null>(null);

  console.log('tasker:', tasker);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setAuthorization(token);
    }
  }, []);

  useEffect(() => {
    const fetchtasker = async () => {
      if (!authorization) return;
      try {
        const response = await api.get('/tasker/get', {
          headers: { Authorization: `Bearer ${authorization}` },
        });
        setTasker(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchtasker();
  }, [authorization]);

  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
        <div className="max-w-xl p-6 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Сайнуу {tasker?.firstName}. Та дараагийн том аялалыг эхлүүлэхдээ
            бэлнэ үү!
          </h1>

          {/* List of options */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-3">
              <FaUser className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Хэдэн асуултанд хариулж та өөрийн бүртгэлээ бүрэн дуусгаарай
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Өөрийн хийдэг ажил ур чадвараа бөглөж хэрэглэгчдээс захиалга
                авах боломжтой
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaShieldAlt className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Төлбөрөө аюулгүй байдалд санаа зовох хэрэггүй бидэнд даатга
              </span>
            </li>
          </ul>

          {/* Button */}
          <Link href="/tasker-side/BecomeTasker">
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Эхэлцгээе
            </button>
          </Link>
          {/* Footer */}
          <p className="text-sm text-gray-500 mt-4">
            Энэ нь 5-10 минут царцуулах болно. Гэхдээ та дараа нь засварлах
            боломжтой
          </p>
        </div>
      </div>
    </Container>
  );
};

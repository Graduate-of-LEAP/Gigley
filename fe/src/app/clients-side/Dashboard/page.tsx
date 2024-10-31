'use client';

import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { BookYourNextTask } from '@/components/ClientSide-Dashboard/BookYourNextTask';
import { PartnerWithIkea } from '@/components/ClientSide-Dashboard/Rewiev';
import { useState, useEffect } from 'react';

import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import TaskersRecommended from '@/components/ClientSide-Dashboard/TaskersRecomended';

export default function Dashboard() {
  const [tasker, setTasker] = useState<Tasker[]>([]);
  const [authorization, setAuthorization] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const fetchTasker = async () => {
      try {
        const response = await api.get('/getAllTasker/taskers', {
          headers: { Authorization: `Bearer ${authorization}` },
        });
        setTasker(response.data);
      } catch (err) {
        console.error('Error fetching taskers:', err);
      }
    };
    fetchTasker();
  }, [authorization]);
  return (
    <>
      <Header />
      <BookYourNextTask />
      <PartnerWithIkea />
      <TaskersRecommended taskers={tasker} />
      <Footer />
    </>
  );
}

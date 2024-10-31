'use client';

import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { BookYourNextTask } from '@/components/ClientSide-Dashboard/BookYourNextTask';
import { PartnerWithIkea } from '@/components/ClientSide-Dashboard/Rewiev';
import { useState, useEffect } from 'react';

import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import TaskersRecommended from '@/components/ClientSide-Dashboard/TaskersRecomended';
import { useParams } from 'next/navigation';

export default function Dashboard() {
  const [tasker, setTasker] = useState<Tasker[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [authorization, setAuthorization] = useState<string | null>(null);
  const { _id } = useParams();

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
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching taskers:', err);
        setError('Failed to load taskers.');
      }
    };
    fetchTasker();
  }, [authorization]);
  return (
    <>
      <Header />

      <BookYourNextTask />
      <PartnerWithIkea />
      <TaskersRecommended taskers={tasker} id={_id} />
      <Footer />
    </>
  );
}

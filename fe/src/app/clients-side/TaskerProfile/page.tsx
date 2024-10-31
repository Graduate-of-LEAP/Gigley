'use client';

import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import TaskerProfile from '@/components/ClientSide-Dashboard/[id]/TaskerProfile';
import { useParams } from 'next/navigation';

export default function TaskerPage() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <TaskerProfile />
      <Footer />
    </>
  );
}

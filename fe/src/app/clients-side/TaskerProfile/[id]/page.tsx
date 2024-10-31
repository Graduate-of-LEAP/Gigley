'use client';

import { Container } from '@/components/assets/Container';
import { TaskerAboutMe } from '@/components/TaskerProfile/AboutMe';
import { TaskerSkills } from '@/components/TaskerProfile/TaskerSkills';
import { useState, useEffect } from 'react';
import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { SelectAndContinue } from '@/components/TaskerProfile/SelectAndContiune';
import { useParams } from 'next/navigation';

export default function TaskerProfile() {
  const [tasker, setTasker] = useState<Tasker>({} as Tasker);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  console.log('Tasker ID:', id);

  useEffect(() => {
    const fetchTasker = async () => {
      if (!id) return;

      try {
        const response = await api.get(`/getTasker/${id}`);
        console.log('Tasker Data:', response.data); 
        setTasker(response.data);
      } catch (error) {
        console.error('API Error:', error); 
        setError('Failed to load tasker details');
      }
    };

    fetchTasker();
  }, [id]);

  if (error) return <div>{error}</div>;

  return (
    <Container className="bg-white">
      <div className="flex flex-col gap-6">
        <TaskerAboutMe tasker={tasker} />
        <TaskerSkills workDetails={tasker.workDetails || []} />
        <SelectAndContinue workDetails={tasker.workDetails || []} />
      </div>
    </Container>
  );
}

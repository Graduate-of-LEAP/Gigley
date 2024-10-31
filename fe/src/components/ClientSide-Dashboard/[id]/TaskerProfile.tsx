'use client';

import { Container } from '@/components/assets/Container';
import { TaskerAboutMe } from '@/components/TaskerProfile/AboutMe';
import { TaskerSkills } from '@/components/TaskerProfile/TaskerSkills';
import { useState, useEffect } from 'react';
import { api } from '@/lib'; // Ensure the api object is correctly configured

import { useParams } from 'next/navigation';
import { SelectAndContinue } from '@/components/TaskerProfile/SelectAndContiune';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';

export default function TaskerProfile() {
  // Initialize state
  const [tasker, setTasker] = useState<Tasker>({} as Tasker);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  console.log('Tasker ID:', id);

  useEffect(() => {
    const fetchTasker = async () => {
      if (!id) return; // Check if ID is available

      try {
        const response = await api.get(`/getTasker/${id}`);
        console.log('Tasker Data:', response.data); // Log fetched data
        setTasker(response.data);
      } catch (error) {
        console.error('API Error:', error); // Log error details
        setError('Failed to load tasker details');
      }
    };

    fetchTasker();
  }, [id]);

  // Handle loading and error states
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

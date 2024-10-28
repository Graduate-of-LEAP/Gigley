'use client';

import { Container } from '@/components/assets/Container';
import { DashboardLayout } from '@/components/TaskerDashboard-components/DashboardLayout';
import { EarningsSummary } from '@/components/TaskerDashboard-components/EarningsSummary';
import { TaskerOverview } from '@/components/TaskerDashboard-components/TaskerOverview';
import { UpcomingTasks } from '@/components/TaskerDashboard-components/UpcomingTasks';
import { useEffect, useState } from 'react';
import { api } from '@/lib';

export type WorkDetail = {
  _id: string;
  taskName: string;
  minHours: number;
  vehicles: string;
  tools: string;
  skillsAndExperience: string;
  images: string[];
  subCategoryId: string;
};

export type Tasker = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  location: string;
  workDetails: WorkDetail[];
  createdAt: string;
  updatedAt: string;
};

const Dashboard = () => {
  const [tasker, setTasker] = useState<Tasker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [authorization, setAuthorization] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  const fetchTaskerInfo = async () => {
    if (!authorization) return;
    try {
      const response = await api.get(`/getTaskerAllInforouter/get`, {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      setTasker(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Tasker information:', error);
      setError('Failed to load Tasker information');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorization) {
      fetchTaskerInfo();
    }
  }, [authorization]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskerOverview tasker={tasker} />
          <UpcomingTasks />
          <EarningsSummary />
        </div>
      </DashboardLayout>
    </Container>
  );
};

export default Dashboard;

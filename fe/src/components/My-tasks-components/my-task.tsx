'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib';
import TaskCard from './task-card';

export type Task = {
  _id: string;
  customerId: string;
  taskerId: string | null;
  location: string;
  taskSize: 'Small' | 'Medium' | 'Large';
  description: string;
  timeOfDay?: 'Morning' | 'Afternoon' | 'Evening' | string;
  specificDate?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  createdAt: string;
  updatedAt: string;
};

export const MyTasks = () => {
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [confirmedTasks, setConfirmedTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [canceledTasks, setCanceledTasks] = useState<Task[]>([]);
  const [authorization, setAuthorization] = useState<string | null>(null);

  console.log('confirmedTasks', confirmedTasks);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/task/get', {
          headers: { Authorization: `Bearer ${authorization}` },
        });
        const tasks = response.data;

        setPendingTasks(tasks.pendingTasks);
        setConfirmedTasks(tasks.upcomingTasks);
        setCompletedTasks(tasks.completedTasks);
        setCanceledTasks(tasks.canceledTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (authorization) {
      fetchTasks();
    }
  }, [authorization]);

  const updateTaskStatus = async (
    taskId: string,
    newStatus: Task['status']
  ) => {
    const validStatuses: Task['status'][] = [
      'pending',
      'confirmed',
      'completed',
      'canceled',
    ];
    if (!validStatuses.includes(newStatus)) {
      console.error('Invalid status received:', newStatus);
      return;
    }

    try {
      console.log('Updating task:', taskId, 'with newStatus:', newStatus); // Log the status update action

      await api.patch(
        `/task/update/${taskId}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${authorization}` },
        }
      );

      const updatedTask = { _id: taskId, status: newStatus } as Task;

      setPendingTasks((prev) => prev.filter((task) => task._id !== taskId));
      setConfirmedTasks((prev) => prev.filter((task) => task._id !== taskId));
      setCompletedTasks((prev) => prev.filter((task) => task._id !== taskId));
      setCanceledTasks((prev) => prev.filter((task) => task._id !== taskId));

      if (newStatus === 'pending') {
        setPendingTasks((prev) => [...prev, updatedTask]);
      } else if (newStatus === 'confirmed') {
        setConfirmedTasks((prev) => [...prev, updatedTask]);
      } else if (newStatus === 'completed') {
        setCompletedTasks((prev) => [...prev, updatedTask]);
      } else if (newStatus === 'canceled') {
        setCanceledTasks((prev) => [...prev, updatedTask]);
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <>
      {/* Pending Tasks */}
      <section>
        <h2 className="text-lg font-semibold mt-4">Pending Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pendingTasks.length > 0 ? (
            pendingTasks.map((task) => (
              // MyTasks Component
              <TaskCard
                key={task._id}
                task={task}
                onStatusChange={(taskId, status) =>
                  updateTaskStatus(taskId, status)
                } // Ensure newStatus is properly passed
                actionLabel="Comfirm"
              />
            ))
          ) : (
            <p>No pending tasks.</p>
          )}
        </div>
      </section>

      {/* Confirmed Tasks */}
      <section>
        <h2 className="text-lg font-semibold mt-6">Confirmed Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {confirmedTasks.length > 0 ? (
            confirmedTasks.map((task) => (
              // MyTasks Component
              <TaskCard
                key={task._id}
                task={task}
                onStatusChange={(taskId, status) =>
                  updateTaskStatus(taskId, status)
                } // Ensure newStatus is properly passed
                actionLabel="Mark as Completed"
              />
            ))
          ) : (
            <p>No confirmed tasks.</p>
          )}
        </div>
      </section>

      {/* Completed Tasks */}
      <section>
        <h2 className="text-lg font-semibold mt-6">Completed Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskCard key={task._id} task={task} onStatusChange={() => {}} />
            ))
          ) : (
            <p>No completed tasks.</p>
          )}
        </div>
      </section>

      {/* Canceled Tasks */}
      <section>
        <h2 className="text-lg font-semibold mt-6">Canceled Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {canceledTasks.length > 0 ? (
            canceledTasks.map((task) => (
              <TaskCard key={task._id} task={task} onStatusChange={() => {}} />
            ))
          ) : (
            <p>No canceled tasks.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default MyTasks;

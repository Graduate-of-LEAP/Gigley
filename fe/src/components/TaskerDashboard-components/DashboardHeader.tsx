'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Bell, User } from 'lucide-react';
import { api } from '@/lib';
import { useTaskerAuth } from '../context/auth.taskerProvider';
import { Task } from '../My-tasks-components/my-task';

export const DashboardHeader = () => {
  const [notifications, setNotifications] = useState<Task[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [authorization, setAuthorization] = useState<string | null>(null);

  const { logout } = useTaskerAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setAuthorization(token);
      console.log('Authorization Token:', token);
    }
  }, []);

  const fetchNotifications = async () => {
    if (!authorization) return;
    try {
      const response = await api.get('/task/notification', {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      setNotifications(response.data);
      setUnreadCount(response.data.length);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    if (authorization) {
      fetchNotifications();
    }

    const interval = setInterval(() => {
      if (authorization) fetchNotifications();
    }, 30000);

    return () => clearInterval(interval);
  }, [authorization]);

  const clearNotifications = () => {
    setUnreadCount(0);
  };

  return (
    <header className="flex items-center justify-between bg-[#2a9df4] p-4 text-white shadow-md">
      <h1 className="text-xl font-semibold">Tasker Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Popover onOpenChange={clearNotifications}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="p-2 hover:bg-[#1167b1] rounded-full relative"
            >
              <Bell />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 text-xs font-bold bg-red-500 text-white rounded-full px-1">
                  {unreadCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4 shadow-lg bg-white text-black">
            <p className="text-sm font-semibold">Notifications</p>
            <ul className="space-y-2 mt-2">
              {notifications.length > 0 ? (
                notifications.map((task) => (
                  <li key={task._id} className="border-b pb-2">
                    <p className="font-medium">
                      {task.subCategoryId.subCategoryName || 'No Subcategory'}{' '}
                    </p>
                    <p className="font-medium">{task.taskSize} Task</p>
                    <p className="text-sm text-gray-600">
                      Location: {task.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date:{' '}
                      {task.specificDate
                        ? new Date(task.specificDate).toLocaleDateString()
                        : 'No date specified'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Time: {task.timeOfDay || 'Anytime'}
                    </p>
                  </li>
                ))
              ) : (
                <li>No new notifications.</li>
              )}
            </ul>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="p-2 hover:bg-[#1167b1] rounded-full"
            >
              <User />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-4 shadow-lg bg-white text-black">
            <p className="font-semibold">Profile Options</p>
            <ul className="space-y-2 mt-2">
              <li>
                <Button
                  variant="link"
                  className="text-[#2a9df4] hover:underline"
                >
                  View Profile
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-[#2a9df4] hover:underline"
                  onClick={() => logout()}
                >
                  Sign Out
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

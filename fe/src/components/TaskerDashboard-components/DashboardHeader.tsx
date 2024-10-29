// DashboardHeader.tsx

'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Bell, User } from 'lucide-react';
import { api } from '@/lib';
import { useTaskerAuth } from '../context/auth.taskerProvider';

type TaskNotification = {
  _id: string;
  location: string;
  taskSize: string;
  description: string;
  specificDate: string;
  timeOfDay: string;
};

export const DashboardHeader = () => {
  const [notifications, setNotifications] = useState<TaskNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [authorization, setAuthorization] = useState<string | null>(null);

  console.log('authorization', authorization);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  const { logout } = useTaskerAuth();

  const fetchNotifications = async () => {
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
    fetchNotifications(); // Initial fetch

    // Set up polling every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const clearNotifications = () => {
    setUnreadCount(0); // Reset unread count when viewing notifications
  };

  return (
    <header className="flex items-center justify-between bg-[#2a9df4] p-4 text-white shadow-md">
      <h1 className="text-xl font-semibold">Tasker Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Notifications */}
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
                    <p className="font-medium">{task.taskSize} Task</p>
                    <p className="text-sm text-gray-600">
                      Location: {task.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(task.specificDate).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Time: {task.timeOfDay}
                    </p>
                  </li>
                ))
              ) : (
                <li>No new notifications.</li>
              )}
            </ul>
          </PopoverContent>
        </Popover>

        {/* Profile */}
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

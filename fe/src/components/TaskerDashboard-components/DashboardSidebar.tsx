'use client';

import Link from 'next/link';
import { Home, ClipboardList, DollarSign, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

export const DashboardSidebar = () => {
  // Call usePathname to get the current path
  const currentPath = usePathname();

  // Function to determine if the link is active
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="w-80 bg-white p-4 border-r shadow-lg  ">
      <Link href="/tasker-side/TaskerDashboard">
        <Button
          variant="ghost"
          className={`w-full flex items-start mb-4 p-2 rounded-md  ${
            isActive('/tasker-side/TaskerDashboard')
              ? 'bg-[#2a9df4] text-white'
              : 'text-[#1167b1] hover:bg-gray-100'
          }`}
        >
          <Home className="mr-2" />
          Dashboard
        </Button>
      </Link>

      <Link href="/tasker-side/My-tasks">
        <Button
          variant="ghost"
          className={`w-full flex items-start mb-4 p-2 rounded-md ${
            isActive('/tasker-side/My-tasks')
              ? 'bg-[#2a9df4] text-white'
              : 'text-[#1167b1] hover:bg-gray-100'
          }`}
        >
          <ClipboardList className="mr-2" />
          My Tasks
        </Button>
      </Link>

      <Button
        variant="ghost"
        className={`w-full flex items-start mb-4 p-2 rounded-md ${
          isActive('/dashboard/earnings')
            ? 'bg-[#2a9df4] text-white'
            : 'text-[#1167b1] hover:bg-gray-100'
        }`}
      >
        <DollarSign className="mr-2" />
        Earnings
      </Button>

      <Button
        variant="ghost"
        className={`w-full flex items-start mb-4 p-2 rounded-md ${
          isActive('/dashboard/settings')
            ? 'bg-[#2a9df4] text-white'
            : 'text-[#1167b1] hover:bg-gray-100'
        }`}
      >
        <Settings className="mr-2" />
        Settings
      </Button>
    </div>
  );
};

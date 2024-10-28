// DashboardSidebar.tsx

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
      <Link href="/dashboard">
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

      <Link href="/dashboard/tasks">
        <Button
          variant="ghost"
          className={`w-full flex items-start mb-4 p-2 rounded-md ${
            isActive('/dashboard/tasks')
              ? 'bg-[#2a9df4] text-white'
              : 'text-[#1167b1] hover:bg-gray-100'
          }`}
        >
          <ClipboardList className="mr-2" />
          My Tasks
        </Button>
      </Link>

      <Link href="/dashboard/earnings">
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
      </Link>

      <Link href="/dashboard/settings">
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
      </Link>
    </div>
  );
};

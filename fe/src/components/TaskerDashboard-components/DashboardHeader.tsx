// DashboardHeader.tsx

import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Bell, User } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between bg-[#2a9df4] p-4 text-white shadow-md">
      <h1 className="text-xl font-semibold">Tasker Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="p-2 hover:bg-[#1167b1] rounded-full"
            >
              <Bell />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4 shadow-lg bg-white text-black">
            <p className="text-sm font-semibold">Notifications</p>
            <ul className="space-y-2 mt-2">
              <li>No new notifications.</li>
              {/* Replace with actual notifications */}
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

import { ReactNode } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex  min-h-screen bg-gray-50 border-r">
      <main className="flex-1">
        {' '}
        <DashboardHeader />
        <div className=" flex h-full">
          <DashboardSidebar />
          <div className="p-4">{children}</div>
        </div>
      </main>
    </div>
  );
};

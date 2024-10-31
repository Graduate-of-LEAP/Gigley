import { Header } from '@/components/assets/Header';
import { DescriptionOfTask } from '@/components/FirstOfFindTasker-components/DescriptionOfTask';
import { TaskOptions } from '@/components/FirstOfFindTasker-components/TaskOptions';
import { TellUsDetails } from '@/components/FirstOfFindTasker-components/TellUsDetails';
import { YourTaskLocation } from '@/components/FirstOfFindTasker-components/YourTaskLocation';

export default function FindTaskerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <DescriptionOfTask />
        <YourTaskLocation />
        <TaskOptions />
        <TellUsDetails />
      </main>
    </div>
  );
}

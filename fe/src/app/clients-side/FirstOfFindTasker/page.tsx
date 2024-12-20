import { Header } from '@/components/assets/Header';
import { DescriptionOfTask } from '@/components/FirstOfFindTasker-components/DescriptionOfTask';
import { TaskOptions } from '@/components/FirstOfFindTasker-components/TaskOptions';
import { TellUsDetails } from '@/components/FirstOfFindTasker-components/TellUsDetails';
import { YourTaskLocation } from '@/components/FirstOfFindTasker-components/YourTaskLocation';

const Page = () => {
  return (
    <>
      <Header />
      <DescriptionOfTask />
      <YourTaskLocation />
      <TaskOptions />
      <TellUsDetails />
    </>
  );
};
export default Page;

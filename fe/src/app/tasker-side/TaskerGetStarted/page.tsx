import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { TaskerBenefits } from '@/components/TaskerGetStarted-components/TaskerBenefits';
import { TaskerEarningsEstimator } from '@/components/TaskerGetStarted-components/TaskerEarningsEstimator';

const Page = () => {
  return (
    <>
      <Header />
      <TaskerEarningsEstimator />
      <TaskerBenefits />
      <Footer />
    </>
  );
};
export default Page;

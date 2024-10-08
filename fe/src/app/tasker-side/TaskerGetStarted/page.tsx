import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { TaskerBenefits } from '@/components/TaskerGetStarted-components/TaskerBenefits';
import { TaskerEarningsEstimator } from '@/components/TaskerGetStarted-components/TaskerEarningsEstimator';

export default function () {
  return (
    <>
      <Header />
      <TaskerEarningsEstimator />
      <TaskerBenefits />
      <Footer />
    </>
  );
}

import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { BookYourNextTask } from '@/components/ClientSide-Dashboard/BookYourNextTask';
import { PartnerWithIkea } from '@/components/ClientSide-Dashboard/Rewiev';
import { TaskersRecommended } from '@/components/ClientSide-Dashboard/TaskersRecomended';

export default function () {
  return (
    <>
      <Header />
      <BookYourNextTask />
      <PartnerWithIkea />
      <TaskersRecommended />
      <Footer />
    </>
  );
}

import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { HireTasker } from '@/components/ServicesPage-components/HireTasker';
import { PressMentions } from '@/components/ServicesPage-components/PressMentions';
import { YourTodoList } from '@/components/ServicesPage-components/YourTodoList';

export default function () {
  return (
    <>
      <Header />
      <YourTodoList />
      <HireTasker />

      <Footer />
    </>
  );
}

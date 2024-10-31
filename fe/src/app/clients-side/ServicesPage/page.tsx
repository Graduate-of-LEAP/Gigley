import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import { HireTasker } from '@/components/ServicesPage-components/HireTasker';
import { YourTodoList } from '@/components/ServicesPage-components/YourTodoList';

const Page = () => {
  return (
    <>
      <Header />
      <YourTodoList />
      <HireTasker />
      <Footer />
    </>
  );
};
export default Page;

import { EarnMoney } from '@/components/BecomeTasker-components/EarnMoney';
import { FlexibleWork } from '@/components/BecomeTasker-components/FlexibleWork';
import { GettingStarted } from '@/components/BecomeTasker-components/GettingStarted';
import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';

export default function () {
  return (
    <>
      <Header />
      <FlexibleWork />
      <EarnMoney />
      <GettingStarted />
      <Footer />
    </>
  );
}

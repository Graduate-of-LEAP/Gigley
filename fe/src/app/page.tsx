import { Footer } from '@/components/assets/Footer';
import { Header } from '@/components/assets/Header';
import {
  HeroSection,
  PopularServices,
  PopularProjects,
  StatisticsOfServices,
  Testimonials,
  TrustAndGuarantees,
  HowItWorks,
  GetHelpToday,
} from '@/components/homepage-components';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularServices />
      <StatisticsOfServices />
      <PopularProjects />
      <Testimonials />
      <TrustAndGuarantees />
      <HowItWorks />
      <GetHelpToday />
      <Footer />
    </>
  );
}

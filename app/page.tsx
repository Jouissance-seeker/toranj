import { Categories } from '@/containers/user/routes/home/categories';
import { HeroSection } from '@/containers/user/routes/home/hero-section';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Categories />
      {/* <Discount />
      <Offers /> */}
    </>
  );
}

import HeroSection from '@/components/HeroSection';
import Highlights from '@/components/Highlights';
import QuickAccessCards from '@/components/QuickAccessCards';
import TrustBar from '@/components/TrustBar';
import NewsEvents from '@/components/NewsEvents';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection 
        title="Empowering Future Innovators"
        description="A premier engineering institution committed to academic excellence, innovation, and industry collaboration."
      />
      
      <TrustBar />

      <Highlights />

      <NewsEvents />

      <Testimonials />

      <QuickAccessCards />
    </>
  );
}

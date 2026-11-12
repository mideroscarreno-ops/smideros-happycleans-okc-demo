import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EmotionalValueSection } from './components/EmotionalValueSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyHappyCleansSection } from './components/WhyHappyCleansSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ReferralGiftSection } from './components/ReferralGiftSection';
import { FaqSection } from './components/FaqSection';
import { BookingQuoteSection } from './components/BookingQuoteSection';
import { FinalCtaAndContact } from './components/FinalCtaAndContact';
import { Footer } from './components/Footer';
import { FrequencyId, ServiceId } from './data/happycleansData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceId>('regular');
  const [selectedFrequency, setSelectedFrequency] = useState<FrequencyId>('biweekly');
  const [prefilledZip, setPrefilledZip] = useState('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceFromShowcase = (serviceId: ServiceId, frequencyId: FrequencyId) => {
    setSelectedService(serviceId);
    setSelectedFrequency(frequencyId);
    scrollToBooking();
  };

  const handleSelectZipForQuote = (zip: string) => {
    setPrefilledZip(zip);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F2] text-[#26332E] overflow-x-clip">
      <Navbar onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        <HeroSection onStartQuote={scrollToBooking} />
        <EmotionalValueSection />
        <ServicesShowcase onSelectService={handleSelectServiceFromShowcase} />
        <HowItWorksSection onStartBooking={scrollToBooking} />
        <WhyHappyCleansSection />
        <ReviewsSection />
        <ServiceAreasSection onSelectZipForQuote={handleSelectZipForQuote} />
        <ReferralGiftSection />
        <FaqSection />
        <BookingQuoteSection
          selectedService={selectedService}
          selectedFrequency={selectedFrequency}
          prefilledZip={prefilledZip}
          onChangeService={setSelectedService}
          onChangeFrequency={setSelectedFrequency}
        />
        <FinalCtaAndContact onStartQuote={scrollToBooking} />
      </main>

      <Footer />
    </div>
  );
}

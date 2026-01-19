import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import RevelationSection from './components/RevelationSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import OfferSection from './components/OfferSection';
import BonusSection from './components/BonusSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <PainSection />
      <RevelationSection />
      <BenefitsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <OfferSection />
      <BonusSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

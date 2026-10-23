import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { IntroductionSection } from '@/components/IntroductionSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AudienceSection } from '@/components/AudienceSection';
import { DevelopmentProcess } from '@/components/DevelopmentProcess';
import { ProjectPortfolio } from '@/components/ProjectPortfolio';
import { ProductBrandsSection } from '@/components/ProductBrandsSection';
import { FounderSection } from '@/components/FounderSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { WhyFoodNovaSection } from '@/components/WhyFoodNovaSection';
import { SocialLinksSection } from '@/components/SocialLinksSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { PrivacyPolicySection } from '@/components/PrivacyPolicySection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { NotFoundPage } from '@/components/NotFoundPage';
import { useSmoothAnchorLinks } from '@/lib/scroll';

type Page = 'home' | 'privacy' | '404';

function App() {
  const [page, setPage] = useState<Page>('home');
  useSmoothAnchorLinks();

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/privacy' || hash === '#privacy') {
        setPage('privacy');
        window.scrollTo({ top: 0 });
      } else if (hash === '#/404') {
        setPage('404');
      } else if (hash === '' || hash === '#' || hash === '#top') {
        setPage('home');
        if (hash === '#top') window.scrollTo({ top: 0 });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === '404') {
    return <NotFoundPage onHome={goHome} />;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        {page === 'privacy' ? (
          <>
            <div className="pt-16 lg:pt-20" />
            <PrivacyPolicySection />
          </>
        ) : (
          <>
            <HeroSection />
            <IntroductionSection />
            <AboutSection />
            <ServicesSection />
            <AudienceSection />
            <DevelopmentProcess />
            <ProjectPortfolio />
            <ProductBrandsSection />
            <FounderSection />
            <CertificationsSection />
            <WhyFoodNovaSection />
            <SocialLinksSection />
            <FAQSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;

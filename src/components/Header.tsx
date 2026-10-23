import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { useScrollPosition, useActiveSection } from '@/lib/hooks';
import { scrollToId } from '@/lib/scroll';
import { BUSINESS } from '@/data/content';

const NAV_LINKS = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Founder', id: 'founder' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export function Header() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleProgress);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToId(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_3px_rgba(33,23,71,0.08)] border-b border-navy/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Logo variant={scrolled ? 'dark' : 'dark'} />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === link.id
                      ? 'text-mint-600 bg-mint-50'
                      : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-1.5 text-sm font-medium text-navy/60 hover:text-navy transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">{BUSINESS.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="rounded-full bg-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-navy-700 transition-colors shadow-sm"
              >
                Discuss Your Project
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-navy hover:bg-navy/5 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Reading progress bar */}
        <div className="w-full h-0.5 bg-transparent overflow-hidden">
          <div
            className="h-full bg-mint-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[320px] max-w-[85vw] bg-ivory shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-navy/10 flex-shrink-0">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center h-10 w-10 rounded-lg text-navy hover:bg-navy/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  active === link.id
                    ? 'text-mint-600 bg-mint-50'
                    : 'text-navy/80 hover:bg-navy/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-5 border-t border-navy/10 space-y-3 flex-shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold text-center hover:bg-navy-700 transition-colors"
            >
              Discuss Your Project
            </button>
            <a
              href={BUSINESS.phoneLink}
              className="flex items-center justify-center gap-2 text-sm font-medium text-navy/60"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

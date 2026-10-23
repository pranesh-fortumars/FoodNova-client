import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS, SERVICES } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Science-driven food product development and R&D consulting for food entrepreneurs and growing businesses. Personalized, practical, and confidentiality-conscious.
            </p>
            <p className="font-serif text-base text-mint-400 italic leading-relaxed pt-2">
              &ldquo;Partner for Success. Let&rsquo;s Develop Better Food Products Together.&rdquo;
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-mint-400/20 bg-mint-400/5 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-mint-400" />
              <span className="text-xs font-medium text-mint-400">Udyam Registered Company</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'top' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Founder', id: 'founder' },
                { label: 'Certifications', id: 'certifications' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => link.id === 'top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToId(link.id)}
                    className="text-sm text-white/60 hover:text-mint-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white mb-4">Core Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToId('services')}
                    className="text-sm text-white/60 hover:text-mint-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-semibold text-white mb-1">Get in Touch</h3>
            <a href={BUSINESS.phoneLink} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-mint-400 transition-colors">
              <Phone className="h-4 w-4 flex-shrink-0" />
              {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-mint-400 transition-colors break-all">
              <Mail className="h-4 w-4 flex-shrink-0" />
              {BUSINESS.email}
            </a>
            <div className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {BUSINESS.address.line1}, {BUSINESS.address.line2}, {BUSINESS.address.line3}
              </span>
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, url: BUSINESS.social.instagram, label: 'Instagram' },
                { Icon: Linkedin, url: BUSINESS.social.linkedin, label: 'LinkedIn' },
                { Icon: Youtube, url: BUSINESS.social.youtube, label: 'YouTube' },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-mint-400 hover:text-navy transition-colors"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/40">
            <span>&copy; {year} FoodNova Consulting. All rights reserved.</span>
            <button
              onClick={() => scrollToId('privacy')}
              className="hover:text-mint-400 transition-colors"
            >
              Privacy Policy
            </button>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-mint-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

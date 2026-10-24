import { useState } from 'react';
import {
  FlaskConical, Microscope, RefreshCw, TrendingDown, Settings2, Eye,
  ShieldCheck, Package, FileText, Leaf, ChevronDown, ArrowRight, Check,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { SERVICES } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical, Microscope, RefreshCw, TrendingDown, Settings2, Eye,
  ShieldCheck, Package, FileText, Leaf,
};

export function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleServiceClick = (serviceTitle: string) => {
    window.dispatchEvent(
      new CustomEvent('select-service', { detail: { service: serviceTitle } })
    );
    scrollToId('contact');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Services</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Complete Food R&D Service Directory
          </h2>
          <p className="text-base text-slate-light mt-4 leading-relaxed">
            From new product development to reformulation, cost optimization, and compliance guidance — explore the full range of consulting services.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? FlaskConical;
            const isOpen = expanded === service.id;
            return (
              <Reveal key={service.id} delay={i * 60}>
                <div
                  className={`group rounded-2xl border bg-white p-5 lg:p-6 transition-all duration-300 ${
                    isOpen
                      ? 'border-mint-300 shadow-lg shadow-mint-100/50'
                      : 'border-navy/8 hover:border-mint-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 group-hover:bg-mint-100 transition-colors">
                      <Icon className="h-6 w-6 text-mint-600" />
                    </div>
                    <button
                      onClick={() => setExpanded(isOpen ? null : service.id)}
                      className="flex items-center justify-center h-8 w-8 rounded-lg text-navy/40 hover:text-navy hover:bg-navy/5 transition-colors flex-shrink-0"
                      aria-label={isOpen ? `Collapse ${service.title}` : `Expand ${service.title}`}
                      aria-expanded={isOpen}
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-display text-base font-semibold text-navy leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed">{service.short}</p>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-1.5 pt-3 border-t border-navy/8">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-slate">
                          <Check className="h-4 w-4 text-mint-500 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-mint-600 hover:text-mint-700 transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

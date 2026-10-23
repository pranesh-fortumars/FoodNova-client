import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { FAQS } from '@/data/content';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center mb-10 lg:mb-14">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">FAQ</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div
                  className={`rounded-xl border transition-all ${
                    isOpen ? 'border-mint-200 bg-white shadow-sm' : 'border-navy/8 bg-white/50'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${i}`}
                  >
                    <span className="font-display text-sm lg:text-base font-semibold text-navy leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-mint-600 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-content-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-slate-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { Reveal } from './Reveal';
import { FAQS } from '@/data/content';

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return FAQS;
    const q = query.toLowerCase();
    return FAQS.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center mb-8 lg:mb-10">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">FAQ</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Frequently Asked Questions
          </h2>
        </Reveal>

        {/* Live Search */}
        <Reveal delay={50} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g. NDA, timelines, handover, testing fees)..."
              className="w-full rounded-xl border border-navy/10 bg-white pl-11 pr-10 py-3 text-sm text-navy placeholder:text-navy/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-mint-300 focus:border-mint-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy p-1"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>

        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 rounded-xl bg-white border border-navy/10 p-6">
              <p className="text-sm text-navy/70">No questions matched your search query.</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="mt-2 text-xs font-semibold text-mint-600 hover:underline"
              >
                Clear search to see all questions
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.q} delay={i * 30}>
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
            })
          )}
        </div>
      </div>
    </section>
  );
}

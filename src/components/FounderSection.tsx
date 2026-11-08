import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IMAGES, BUSINESS } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const FOCUS_AREAS = [
  'Food R&D',
  'Product Development & Formulation',
  'Product Standardization',
  'Processing and Quality Management',
  'Food Safety Certifications',
  'Food Safety and Quality Systems',
  'Labelling and Regulatory Compliance',
  'Certification-Related Technical Guidance',
];

export function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-navy border border-navy/10 aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[580px]">
                <img
                  src={IMAGES.founderPlaceholder}
                  alt="Joshika M - Founder & Food Technologist at FoodNova Consulting"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Bottom Card - Floating Name Pill */}
              <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-navy/8 flex items-center justify-between">
                <div>
                  <p className="font-display text-base sm:text-lg font-bold text-navy leading-tight">Joshika M</p>
                  <p className="text-xs sm:text-sm text-mint-600 font-semibold mt-0.5">{BUSINESS.title}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-mint-400 animate-pulse" />
              </div>

              {/* Top Pill Badge */}
              <div className="absolute -top-3.5 -right-2 sm:-right-3 bg-mint-400 text-navy text-xs font-bold rounded-full px-4 py-1.5 shadow-lg border border-white/50 tracking-wide">
                Founder & Food Technologist
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Founder Profile</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
                Meet the Founder Behind FoodNova.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-base text-slate leading-relaxed">
                Joshika M is a Food Technologist with 3 years of industrial experience in food R&D, product development, formulation, sensory evaluation, and quality management. Through FoodNova Consulting, she aims to help food businesses transform ideas into innovative, consistent, and market-ready products through science-driven solutions.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <blockquote className="border-l-3 border-mint-400 pl-5 py-1">
                <p className="font-serif text-lg lg:text-xl text-navy italic leading-relaxed">
                  &ldquo;Every product has its own technical challenges. My approach is to understand the product brief, work through the formulation, evaluate feedback, and refine the product toward the agreed objectives.&rdquo;
                </p>
                <p className="text-xs text-slate-light mt-2">Suggested website copy for founder approval.</p>
              </blockquote>
            </Reveal>

            <Reveal delay={300}>
              <div>
                <p className="text-sm font-semibold text-navy mb-3">Professional Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {FOCUS_AREAS.map((area) => (
                    <span
                      key={area}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-medium ${
                        area === 'Food Safety Certifications'
                          ? 'bg-mint-400 text-navy font-semibold shadow-sm border border-mint-500/20'
                          : 'bg-sage border border-mint-200 text-navy'
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => scrollToId('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy-700 transition-all shadow-lg shadow-navy/10"
                >
                  Work With Joshika
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy/30 transition-all"
                >
                  Message on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

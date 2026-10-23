import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { IMAGES, BUSINESS } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const FOCUS_AREAS = [
  'Food R&D',
  'Product development and formulation',
  'Sensory evaluation',
  'Product standardization',
  'Cost-conscious formulation',
  'Processing and quality management',
];

export function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-sage">
                <img
                  src={IMAGES.founderPlaceholder}
                  alt="Portrait placeholder for Joshika Mahendran, Food Technologist and Founder"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4">
                <p className="font-display text-base font-bold text-navy">Joshika Mahendran</p>
                <p className="text-sm text-mint-600 font-medium">Founder & Food Technologist</p>
              </div>
              <div className="absolute -top-3 -right-3 bg-amber-400 text-navy text-xs font-semibold rounded-full px-3 py-1.5 shadow-md">
                Placeholder — Replace with founder photo
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
                Joshika Mahendran is a Food Technologist with 3 years of industrial experience in food R&D, product development, formulation, sensory evaluation, and quality management. Through FoodNova Consulting, she aims to help food businesses transform ideas into innovative, consistent, and market-ready products through science-driven solutions.
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
                    <span key={area} className="rounded-full bg-sage border border-mint-200 px-3.5 py-1.5 text-xs font-medium text-navy">
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

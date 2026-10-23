import { Check, BadgeCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { IMAGES } from '@/data/content';

const DIFFERENTIATORS = [
  'Personalized technical support',
  'A structured product development process',
  'Ingredient research and cost optimization',
  'Product trials and formulation refinement',
  'Sensory evaluation and feedback-led iteration',
  'Technical handover documentation',
  'Confidentiality-conscious collaboration',
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-sage relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">About FoodNova</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
                Your Product Development Partner.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-base text-slate leading-relaxed">
                FoodNova Consulting supports entrepreneurs, startups, and food manufacturers through product development, formulation, process improvement, and practical technical guidance.
              </p>
              <p className="text-base text-slate leading-relaxed mt-4">
                The consulting approach is designed to support both founders who are new to the food industry and businesses seeking external R&D expertise.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d} delay={150 + i * 50}>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-5 w-5 text-mint-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate font-medium">{d}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-mint-200 bg-white px-4 py-3 mt-2">
                <BadgeCheck className="h-5 w-5 text-mint-600" />
                <span className="text-sm font-semibold text-navy">Udyam Registered Company</span>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal className="lg:col-span-5" delay={100}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={IMAGES.labPipette}
                  alt="Scientist holding a beaker with orange liquid in a laboratory setting"
                  className="w-full h-[380px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-navy/5 p-4 hidden sm:block">
                <p className="font-display text-2xl font-bold text-mint-600">3+</p>
                <p className="text-xs text-slate-light">Years of industrial food R&D experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { FlaskConical, Target, TrendingDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { IMAGES } from '@/data/content';

const PRINCIPLES = [
  {
    icon: FlaskConical,
    title: 'Science-led Development',
    desc: 'Every formulation is grounded in ingredient functionality, processing science, and documented trials.',
  },
  {
    icon: Target,
    title: 'Quality-focused Formulation',
    desc: 'Products are refined through sensory evaluation and feedback-led iteration toward the agreed objectives.',
  },
  {
    icon: TrendingDown,
    title: 'Cost-conscious Solutions',
    desc: 'Ingredient research and formulation alternatives are explored with commercial feasibility in mind.',
  },
];

export function IntroductionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-navy/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Text Header */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">
            Why FoodNova Exists
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Good Food Ideas Deserve the Right Science.
          </h2>
          <div className="w-16 h-1 bg-mint-400 mx-auto rounded-full mt-4" />
        </Reveal>

        {/* Narrative Copy */}
        <Reveal delay={100} className="mt-10 text-center max-w-3xl mx-auto space-y-5">
          <p className="text-base sm:text-lg text-slate leading-relaxed">
            Developing a successful food product involves more than a promising idea. Ingredients, formulation, processing, sensory qualities, production feasibility, and cost all influence the final result.
          </p>
          <p className="text-base sm:text-lg text-slate leading-relaxed">
            FoodNova Consulting provides personalized food product development and R&D support to help businesses move from early concepts and existing formulation challenges toward standardized, commercially practical products.
          </p>
        </Reveal>

        {/* 3 Core Principles in an elegant 3-column layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-navy/8">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 80}>
              <div className="h-full p-6 rounded-2xl bg-ivory border border-navy/8 hover:border-mint-200 hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-mint-600 mb-4">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-slate-light leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

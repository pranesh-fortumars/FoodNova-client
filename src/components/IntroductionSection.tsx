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
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={IMAGES.ingredients}
                  alt="Herbs and spices on a wooden board showcasing culinary ingredients"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-navy text-white rounded-xl shadow-xl p-5 max-w-[220px] hidden sm:block">
                <p className="font-display text-sm font-semibold leading-snug">
                  Ingredient research is the foundation of every project.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">
                Why FoodNova Exists
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
                Good Food Ideas Deserve the Right Science.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-base text-slate leading-relaxed">
                Developing a successful food product involves more than a promising idea. Ingredients, formulation, processing, sensory qualities, production feasibility, and cost all influence the final result.
              </p>
              <p className="text-base text-slate leading-relaxed mt-4">
                FoodNova Consulting provides personalized food product development and R&D support to help businesses move from early concepts and existing formulation challenges toward standardized, commercially practical products.
              </p>
            </Reveal>

            <div className="space-y-4 pt-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={200 + i * 80}>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-navy/8 hover:border-mint-200 hover:bg-mint-50/30 transition-all">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mint-50 flex-shrink-0">
                      <p.icon className="h-5 w-5 text-mint-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy">{p.title}</h3>
                      <p className="text-sm text-slate-light mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

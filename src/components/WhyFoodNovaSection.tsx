import {
  Workflow, Hand, Calculator, MessageSquare, Lock, ClipboardCheck,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { WHY_FOODNOVA } from '@/data/content';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Workflow, Hand, Calculator, MessageSquare, Lock, ClipboardCheck,
};

export function WhyFoodNovaSection() {
  return (
    <section className="py-20 lg:py-28 bg-sage relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Why Choose FoodNova</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Practical R&D. Thoughtful Formulation. Clear Communication.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_FOODNOVA.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Workflow;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-navy/8 bg-white p-6 hover:border-mint-200 hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-mint-400 mb-4 group-hover:bg-navy-700 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-light leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

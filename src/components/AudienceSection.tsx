import {
  Lightbulb, Rocket, Factory, TrendingUp, ChefHat, ArrowRight,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { AUDIENCES } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb, Rocket, Factory, TrendingUp, ChefHat,
};

export function AudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Who We Help</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Built Around the Needs of Food Businesses.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCES.map((aud, i) => {
            const Icon = ICONS[aud.icon] ?? Lightbulb;
            return (
              <Reveal key={aud.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-navy/8 bg-ivory p-6 hover:border-mint-200 hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-mint-400 mb-4 group-hover:bg-navy-700 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy mb-2">{aud.title}</h3>
                  <p className="text-sm text-slate-light leading-relaxed mb-4">{aud.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-mint-600 bg-mint-50 rounded-full px-3 py-1.5">
                    {aud.service}
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* CTA card */}
          <Reveal delay={AUDIENCES.length * 80}>
            <button
              onClick={() => scrollToId('contact')}
              className="group h-full w-full rounded-2xl bg-navy p-6 text-left hover:bg-navy-700 transition-all flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  Not sure which service fits?
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Share your product challenge and we'll help you find the right approach.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-mint-400 mt-4">
                Start a conversation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

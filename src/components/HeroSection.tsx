import { ArrowRight, ChevronDown, ShieldCheck, FlaskConical, Beaker } from 'lucide-react';
import { IMAGES } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

export function HeroSection() {
  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-ivory">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint-50 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl opacity-50 translate-y-1/3" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-mint-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-mint-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
              Food Product Development & R&D Consulting
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-bold text-navy tracking-tight">
              From Food Ideas to{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-mint-600">Products Ready</span>
                <svg className="absolute bottom-1 left-0 w-full h-3 text-mint-200" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 Q100 2, 198 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              for the Market.
            </h1>

            <p className="text-base lg:text-lg text-slate leading-relaxed max-w-xl">
              Science-driven product development, formulation, process improvement, and practical R&D support for food entrepreneurs and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scrollToId('contact')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy-700 transition-all shadow-lg shadow-navy/10 hover:shadow-xl hover:shadow-navy/15 hover:-translate-y-0.5"
              >
                Discuss Your Product Idea
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToId('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy/30 hover:bg-navy/5 transition-all"
              >
                Explore Our Work
              </button>
            </div>

            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-light pt-3">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-mint-500" />
                Personalized R&D support
              </span>
              <span className="flex items-center gap-1.5">
                <FlaskConical className="h-4 w-4 text-mint-500" />
                Practical product solutions
              </span>
              <span className="flex items-center gap-1.5">
                <Beaker className="h-4 w-4 text-mint-500" />
                Confidential collaboration
              </span>
            </p>
          </div>

          {/* Image column */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-12 grid-rows-6 gap-3 h-[420px] sm:h-[500px] lg:h-[540px]">
              {/* Main lab image */}
              <div className="col-span-8 row-span-6 rounded-2xl overflow-hidden shadow-xl relative group">
                <img
                  src={IMAGES.heroLab}
                  alt="Food technologist using a dropper to mix liquids in glass bottles in a clean laboratory"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>

              {/* Secondary beverage image */}
              <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={IMAGES.heroBeverage}
                  alt="Fresh juice in glass bottles with natural ingredients"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Tertiary beverage image */}
              <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src={IMAGES.heroBeverage2}
                  alt="Glass bottle of juice on a table"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-2 bg-white rounded-xl shadow-lg border border-navy/5 p-3.5 flex items-center gap-3 max-w-[200px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-50 flex-shrink-0">
                  <FlaskConical className="h-5 w-5 text-mint-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-navy leading-tight">Science-led</p>
                  <p className="text-xs text-slate-light leading-tight">Formulation & R&D</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex flex-col items-center mt-12">
          <button
            onClick={() => scrollToId('about')}
            className="flex flex-col items-center gap-1 text-navy/30 hover:text-navy/50 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-scroll-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

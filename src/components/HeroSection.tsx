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

          {/* Image column with multi-image scientific laboratory composition & descriptive logo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Laboratory Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 bg-sage h-[360px] sm:h-[440px] lg:h-[470px] group">
                <img
                  src={IMAGES.heroLab}
                  alt="Food technologist in sterile blue gloves examining vibrant formulation liquid in an Erlenmeyer flask under research microscope"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Top-Right Descriptive FoodNova Logo Emblem on the Image */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-navy/10 flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="#42DFA8" strokeWidth="2" />
                      <path d="M20 9 C14 9, 10 14, 10 20 C10 26, 15 29, 20 29 C25 29, 30 26, 30 20 C30 14, 26 9, 20 9 Z" fill="none" stroke="#42DFA8" strokeWidth="1.8" />
                      <path d="M14 18 Q17 15, 20 18 Q23 21, 26 18" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                      <circle cx="14" cy="18" r="1.5" fill="#42DFA8" />
                      <circle cx="26" cy="18" r="1.5" fill="#42DFA8" />
                      <circle cx="20" cy="22" r="2" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <div className="pr-1">
                    <p className="font-display font-bold text-xs text-navy leading-none">FoodNova</p>
                    <p className="text-[10px] text-mint-700 font-medium tracking-wider uppercase mt-0.5">R&D Consulting</p>
                  </div>
                </div>

                {/* Primary Card - Food Science & R&D Descriptive Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-navy/5 p-4 flex items-center gap-3.5 max-w-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-50 flex-shrink-0 text-mint-600">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy uppercase tracking-wider">Food Science & R&D</p>
                    <p className="text-xs text-slate-light leading-snug mt-0.5">
                      Formulation trials, laboratory precision & standardization
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Scientific Formulation Sample Card (Bottom Right overlap) */}
              <div className="hidden sm:flex absolute -bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl p-2.5 shadow-2xl border border-navy/10 items-center gap-3 max-w-[240px] animate-fade-in z-20">
                <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 bg-sage">
                  <img
                    src={IMAGES.labPipette}
                    alt="Precision laboratory beaker with sample formulation"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-mint-500/10" />
                </div>
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-mint-400" />
                    <p className="text-[11px] font-bold text-navy uppercase tracking-wide">Formulation</p>
                  </div>
                  <p className="text-[11px] text-slate-light leading-tight mt-0.5">
                    Trial-tested recipes & process control
                  </p>
                </div>
              </div>

              {/* Tertiary Floating Quality Verification Pill (Top Left overlap) */}
              <div className="hidden md:flex absolute -top-4 -left-4 bg-navy text-white rounded-xl py-2 px-3.5 shadow-xl border border-white/10 items-center gap-2 z-20">
                <ShieldCheck className="h-4 w-4 text-mint-400 flex-shrink-0" />
                <span className="text-xs font-medium tracking-wide">Precision R&D & QA</span>
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

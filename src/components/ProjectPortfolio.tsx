import { useState, useMemo } from 'react';
import {
  ArrowRight, X, ChevronDown, Loader2, AlertCircle, Clock, CheckCircle2,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { PROJECTS, PROJECT_CATEGORIES, IMAGES } from '@/data/content';
import { scrollToId } from '@/lib/scroll';

const PROJECT_IMAGES: Record<string, string> = {
  beverageRtd: IMAGES.beverageRtd,
  gravyMix: IMAGES.gravyMix,
  cashewLaddoo: IMAGES.cashewLaddoo,
  cashewHalwa: IMAGES.cashewHalwa,
  pepperCashew: IMAGES.pepperCashew,
  carbonatedBeverage: IMAGES.carbonatedBeverage,
  freezeDriedFruit: IMAGES.freezeDriedFruit,
  sugarFreeSweets: IMAGES.sugarFreeSweets,
};

interface Project {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'waiting-production' | 'yet-to-launch';
  statusLabel?: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
}

export function ProjectPortfolio() {
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-sage">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Featured Projects</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Authentic Product Development Portfolio
          </h2>
          <p className="text-base text-slate-light mt-4 leading-relaxed">
            Real projects with documented challenges, approaches, and outcomes. Client identities may be withheld where required.
          </p>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-navy/70 border border-navy/10 hover:border-navy/20 hover:text-navy'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                filter === cat ? 'bg-white/20 text-white' : 'bg-navy/5 text-navy/60'
              }`}>
                {categoryCounts[cat] || 0}
              </span>
            </button>
          ))}
        </Reveal>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <button
                onClick={() => setSelected(project as Project)}
                className="group block w-full text-left rounded-2xl overflow-hidden bg-white border border-navy/8 hover:border-mint-200 hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden bg-sage">
                  <img
                    src={PROJECT_IMAGES[project.image]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === 'completed'
                        ? 'bg-mint-400 text-navy'
                        : project.status === 'waiting-production'
                        ? 'bg-amber-300 text-navy'
                        : 'bg-slate-200 text-navy'
                    }`}>
                      {project.status === 'completed' ? (
                        <><CheckCircle2 className="h-3 w-3" /> Completed</>
                      ) : project.status === 'waiting-production' ? (
                        <><Clock className="h-3 w-3" /> Waiting for production</>
                      ) : (
                        <><Clock className="h-3 w-3" /> Yet to launch</>
                      )}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-navy">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-navy mb-2 group-hover:text-mint-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-light leading-relaxed line-clamp-2">{project.challenge}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-mint-600 mt-3">
                    View details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Confidentiality note */}
        <Reveal delay={200}>
          <p className="text-center text-xs text-slate-light mt-8 max-w-2xl mx-auto">
            Client identities may be withheld where confidentiality requires. Proprietary recipes and formulation details are not disclosed.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-12 text-center rounded-3xl bg-navy p-8 lg:p-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">
              Have a Product Challenge of Your Own?
            </h3>
            <button
              onClick={() => scrollToId('contact')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 text-navy px-6 py-3.5 text-sm font-semibold hover:bg-mint-300 transition-all shadow-lg"
            >
              Discuss Your Product Idea
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Project detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${selected.title}`}
        >
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-ivory rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-down">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-navy hover:bg-white shadow-md transition-colors"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
              <img src={PROJECT_IMAGES[selected.image]} alt={selected.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-2 ${
                  selected.status === 'completed'
                    ? 'bg-mint-400 text-navy'
                    : selected.status === 'waiting-production'
                    ? 'bg-amber-300 text-navy'
                    : 'bg-slate-200 text-navy'
                }`}>
                  {selected.status === 'completed' ? (
                    <><CheckCircle2 className="h-3 w-3" /> Completed</>
                  ) : selected.status === 'waiting-production' ? (
                    <><Clock className="h-3 w-3" /> Waiting for production</>
                  ) : (
                    <><Clock className="h-3 w-3" /> Yet to launch</>
                  )}
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white">{selected.title}</h3>
                <p className="text-sm text-white/80 mt-1">{selected.category}</p>
              </div>
            </div>
            <div className="p-6 lg:p-8 space-y-5">
              <div>
                <h4 className="font-display text-sm font-semibold text-mint-600 uppercase tracking-wide mb-2">Challenge</h4>
                <p className="text-sm text-slate leading-relaxed">{selected.challenge}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-mint-600 uppercase tracking-wide mb-2">Approach</h4>
                <p className="text-sm text-slate leading-relaxed">{selected.approach}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-mint-600 uppercase tracking-wide mb-2">
                  {selected.status === 'completed' ? 'Reported Outcome' : 'Current Status'}
                </h4>
                <p className="text-sm text-slate leading-relaxed font-medium">{selected.outcome}</p>
              </div>

              <div className="pt-4 border-t border-navy/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent('select-service', {
                        detail: {
                          service: 'Food Product Development',
                          category: selected.category.includes('Beverage') ? 'Beverages' :
                                    selected.category.includes('Ready-to-Eat') ? 'Ready-to-eat products' :
                                    selected.category.includes('Ready-to-Cook') ? 'Ready-to-cook products' :
                                    selected.category.includes('Sweets') || selected.category.includes('Confectionery') ? 'Bakery and confectionery' :
                                    selected.category.includes('Snacks') ? 'Snacks and savouries' : 'Other'
                        }
                      })
                    );
                    setSelected(null);
                    scrollToId('contact');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-navy-700 transition-colors shadow-sm"
                >
                  Discuss a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

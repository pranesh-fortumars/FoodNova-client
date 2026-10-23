import { Search, FlaskRound, ClipboardCheck, Lock, Info } from 'lucide-react';
import { Reveal } from './Reveal';

const PHASES = [
  {
    num: '01',
    icon: Search,
    title: 'Ingredient Research & Cost Optimization',
    desc: 'Research suitable ingredients and explore cost-conscious options based on the product brief, specifications, and trial requirements.',
    timeline: 'Approximately 1\u20132 days to finalize the ingredient list for trials.',
    deliverables: ['Ingredient list for trials', 'Cost-conscious sourcing research'],
  },
  {
    num: '02',
    icon: FlaskRound,
    title: 'Product Trials & Processing',
    desc: 'Conduct formulation trials, refine the recipe, and establish relevant processing parameters for the product.',
    timeline: 'Approximately 15\u201390 days for initial formulation batches, depending on the project.',
    deliverables: ['Formulation trials', 'Processing parameters', 'Recipe refinement'],
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Sensory Evaluation, Refinement & Final Handover',
    desc: 'Evaluate trial samples, gather client feedback, make agreed refinements, and finalize the product formulation.',
    timeline: 'Duration depends on courier transit, feedback turnaround, product nature, and required revisions.',
    deliverables: ['Finalized product formula', 'Processing steps', 'Commercial costing sheet'],
  },
];

export function DevelopmentProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#42DFA8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-400 uppercase">The Process</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mt-2">
            The FoodNova Development Process
          </h2>
          <p className="text-base text-white/60 mt-4 leading-relaxed">
            A structured three-phase journey from ingredient research to final handover.
          </p>
        </Reveal>

        {/* Horizontal timeline for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-[72px] left-[16%] right-[16%] h-px bg-gradient-to-r from-mint-400/30 via-mint-400/60 to-mint-400/30" />

          {PHASES.map((phase, i) => (
            <Reveal key={phase.num} delay={i * 150} className="relative">
              <div className="flex flex-col items-center text-center px-6">
                {/* Number badge */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy-700 border-2 border-mint-400 mb-6">
                  <phase.icon className="h-7 w-7 text-mint-400" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-mint-400 text-navy text-xs font-bold">
                    {phase.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-3 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{phase.desc}</p>

                <div className="bg-navy-700/50 rounded-lg px-4 py-3 w-full">
                  <p className="text-xs text-mint-400 font-medium mb-1">Indicative Timeline</p>
                  <p className="text-xs text-white/70 leading-relaxed">{phase.timeline}</p>
                </div>

                <div className="mt-4 w-full text-left">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">Deliverables</p>
                  <ul className="space-y-1">
                    {phase.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-white/80">
                        <span className="h-1 w-1 rounded-full bg-mint-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Vertical timeline for mobile */}
        <div className="lg:hidden space-y-8">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.num} delay={i * 100}>
              <div className="relative pl-16">
                {/* Line */}
                {i < PHASES.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-px bg-mint-400/30" />
                )}
                {/* Badge */}
                <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 border-2 border-mint-400">
                  <phase.icon className="h-6 w-6 text-mint-400" />
                </div>

                <div className="bg-navy-700/40 rounded-xl p-4">
                  <span className="text-xs font-bold text-mint-400">Phase {phase.num}</span>
                  <h3 className="font-display text-base font-semibold text-white mt-1 mb-2 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-3">{phase.desc}</p>
                  <p className="text-xs text-mint-300/80 leading-relaxed mb-3">{phase.timeline}</p>
                  <div className="space-y-1">
                    {phase.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="h-1 w-1 rounded-full bg-mint-400" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Confidentiality & expenses notes */}
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="rounded-2xl border border-mint-400/20 bg-navy-700/30 p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-400/10">
                  <Lock className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">Confidentiality</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Every engagement begins with a Non-Disclosure / Confidentiality Agreement (NDA), according to the consultant&rsquo;s stated process, to help protect the client&rsquo;s product idea and intellectual property.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-mint-400/20 bg-navy-700/30 p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-400/10">
                  <Info className="h-5 w-5 text-mint-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">Project Expenses</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Ingredient purchases and external laboratory testing fees are borne directly by the client. External testing may include nutritional analysis, shelf-life studies, and relevant physical or chemical parameter testing, depending on the agreed scope.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="text-center text-xs text-white/40 mt-6">
            Indicative timelines are based on the documented portfolio. Actual durations vary by project and are not guaranteed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

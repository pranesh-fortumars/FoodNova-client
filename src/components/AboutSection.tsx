import { useState } from 'react';
import { Check, BadgeCheck, FileText, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { IMAGES } from '@/data/content';

const EXPERTISE_AREAS = [
  { title: 'Food Product Development', desc: 'From initial concept exploration to standardized commercial formulations.' },
  { title: 'Research & Development', desc: 'Ingredient functionality, laboratory experimentation, and technical problem-solving.' },
  { title: 'Product Quality & Quality Management', desc: 'Consistency protocols, QA advisory, and quality systems guidance.' },
  { title: 'Food Labelling & Regulatory Compliance', desc: 'Advisory on display requirements, ingredient declarations, and mandatory information.' },
  { title: 'Food Safety Advisory', desc: 'Technical guidance aligned with relevant food safety management systems.' },
  { title: 'Certification-Related Guidance & Compliance', desc: 'Process advisory and audit readiness guidance for standard food frameworks.' },
  { title: 'Food Process Improvement', desc: 'Standard operating parameters, trial observations, and manufacturing workflow optimization.' },
  { title: 'Product Standardization', desc: 'Ensuring batch-to-batch consistency in sensory, physical, and technical attributes.' },
];

export function AboutSection() {
  const [showUdyamModal, setShowUdyamModal] = useState(false);

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
                FoodNova Consulting supports entrepreneurs, startups, and food manufacturers through science-driven product development, formulation refinement, process improvement, and practical technical guidance.
              </p>
              <p className="text-base text-slate leading-relaxed mt-3">
                The consulting approach is tailored to support both emerging founders navigating the food industry for the first time and established businesses seeking specialized external R&D expertise.
              </p>
            </Reveal>

            {/* Expanded 8 Areas of Expertise */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-navy uppercase tracking-wider">Core Areas of Technical Expertise</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {EXPERTISE_AREAS.map((item, i) => (
                  <Reveal key={item.title} delay={120 + i * 40}>
                    <div className="p-3.5 rounded-xl bg-white/80 border border-navy/5 hover:border-mint-200 hover:bg-white transition-all">
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-mint-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-navy leading-snug">{item.title}</p>
                          <p className="text-xs text-slate-light leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Udyam Registration Showcase */}
            <Reveal delay={450}>
              <div className="rounded-2xl border border-mint-200 bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-50 text-mint-600 flex-shrink-0">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-navy">Udyam Registered Company</span>
                      <span className="text-[10px] font-semibold uppercase bg-mint-100 text-mint-700 px-2 py-0.5 rounded-md">
                        MSME India
                      </span>
                    </div>
                    <p className="text-xs text-slate-light mt-0.5">
                      Government of India Ministry of Micro, Small and Medium Enterprises
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowUdyamModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint-600 hover:text-mint-700 bg-mint-50/70 hover:bg-mint-50 px-3 py-2 rounded-lg transition-colors border border-mint-200/50 whitespace-nowrap"
                >
                  <FileText className="h-3.5 w-3.5" />
                  View Certificate Info
                </button>
              </div>
            </Reveal>
          </div>

          {/* Image - Modern Testing Laboratory Setup */}
          <Reveal className="lg:col-span-5" delay={100}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy/10 bg-sage">
                <img
                  src={IMAGES.aboutLab}
                  alt="Modern food testing laboratory with food technologist conducting formulation research"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-navy/5 p-4 hidden sm:block">
                <p className="font-display text-2xl font-bold text-mint-600">3+</p>
                <p className="text-xs text-slate-light">Years of industrial food R&D experience</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-navy text-white rounded-xl shadow-lg p-4 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 text-mint-400 mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Quality First</span>
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  Rigorous testing & trial-based standardization.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Udyam Certificate Modal */}
      {showUdyamModal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Udyam Registration Details"
        >
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setShowUdyamModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-slide-down border border-navy/10">
            <button
              onClick={() => setShowUdyamModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 text-mint-600">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">Udyam Registration Status</h3>
                <p className="text-xs text-slate-light">Ministry of Micro, Small and Medium Enterprises, Government of India</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-ivory border border-navy/8 space-y-3 text-sm text-slate">
              <div className="flex justify-between py-1 border-b border-navy/5">
                <span className="text-xs text-slate-light">Enterprise Name:</span>
                <span className="font-semibold text-navy">FoodNova Consulting</span>
              </div>
              <div className="flex justify-between py-1 border-b border-navy/5">
                <span className="text-xs text-slate-light">Status:</span>
                <span className="inline-flex items-center gap-1 font-semibold text-mint-700">
                  <Check className="h-3.5 w-3.5" /> Udyam Registered Company
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-navy/5">
                <span className="text-xs text-slate-light">Location:</span>
                <span className="font-medium text-navy text-right">Komarapalayam, Tamil Nadu</span>
              </div>
              <div className="p-3 bg-mint-50/60 rounded-lg text-xs text-navy/80 leading-relaxed">
                Authentic Udyam registration document preview. Official certificate file can be uploaded and updated upon client verification.
              </div>
            </div>
            <button
              onClick={() => setShowUdyamModal(false)}
              className="w-full mt-5 rounded-full bg-navy text-white py-2.5 text-sm font-semibold hover:bg-navy-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

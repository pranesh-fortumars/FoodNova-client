import {
  Sparkles, Award, ShieldCheck, FileCheck, Package, GraduationCap,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { CERTIFICATIONS } from '@/data/content';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Award, ShieldCheck, FileCheck, Package, GraduationCap,
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Credentials</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Certifications & Professional Development
          </h2>
          <p className="text-base text-slate-light mt-4 leading-relaxed">
            Professional training and certifications that inform the consulting approach.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Award;
            return (
              <Reveal key={cert.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-navy/8 bg-ivory p-6 hover:border-mint-200 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50 group-hover:bg-mint-100 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6 text-mint-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-navy leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

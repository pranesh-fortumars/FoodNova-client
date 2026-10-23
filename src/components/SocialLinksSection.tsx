import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { BUSINESS } from '@/data/content';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@foodnova.consulting',
    url: BUSINESS.social.instagram,
    icon: Instagram,
    desc: 'Project highlights, formulation insights, and food science updates.',
  },
  {
    name: 'LinkedIn',
    handle: 'FoodNova Consulting',
    url: BUSINESS.social.linkedin,
    icon: Linkedin,
    desc: 'Professional updates, service announcements, and industry content.',
  },
  {
    name: 'YouTube',
    handle: '@FoodnovaConsulting',
    url: BUSINESS.social.youtube,
    icon: Youtube,
    desc: 'Food product development videos and R&D demonstrations.',
  },
];

export function SocialLinksSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-navy/5">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Connect With Us</p>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy leading-tight mt-2">
            Explore FoodNova on Social Media
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {SOCIALS.map((social, i) => (
            <Reveal key={social.name} delay={i * 100}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-navy/8 bg-ivory p-6 hover:border-mint-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white group-hover:bg-mint-400 group-hover:text-navy transition-colors">
                    <social.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-navy/30 group-hover:text-mint-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-display text-base font-semibold text-navy">{social.name}</h3>
                <p className="text-sm text-mint-600 font-medium mt-0.5">{social.handle}</p>
                <p className="text-sm text-slate-light mt-2 leading-relaxed">{social.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

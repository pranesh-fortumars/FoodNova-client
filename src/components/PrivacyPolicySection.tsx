import { ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { scrollToId } from '@/lib/scroll';

export function PrivacyPolicySection() {
  return (
    <section id="privacy" className="py-20 lg:py-28 bg-ivory">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-50">
              <ShieldCheck className="h-6 w-6 text-mint-600" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Legal</p>
              <h1 className="font-display text-2xl lg:text-3xl font-bold text-navy">Privacy Policy</h1>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-navy/8 bg-white p-6 lg:p-8 space-y-6">
            <div>
              <p className="text-xs text-slate-light mb-1">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-5 text-sm text-slate leading-relaxed">
              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">1. Information We Collect</h2>
                <p>
                  FoodNova Consulting collects information that you voluntarily provide through the enquiry form on this website. This includes your name, company name, email address, phone or WhatsApp number, business type, service required, product category, current product stage, project description, target timeline, and preferred contact method.
                </p>
                <p className="mt-2">
                  We do not collect sensitive product formulations through the enquiry form. Sensitive product details should be discussed only after an appropriate confidentiality arrangement is in place.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">2. How We Use Your Information</h2>
                <p>
                  Your information is used solely to respond to your enquiry, discuss potential project scope, and provide consulting services. We do not sell, rent, or share your personal information with third parties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">3. Communication Methods</h2>
                <p>
                  When you submit the enquiry form, the details are sent via WhatsApp to initiate a conversation. You may also be contacted by phone or email based on your stated preference. You can opt out of communications at any time.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">4. Data Storage</h2>
                <p>
                  Enquiry information is handled by the consultant directly. We do not use third-party analytics or marketing trackers on this website. No automated profiling is performed on your data.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">5. Confidentiality</h2>
                <p>
                  Every consulting engagement begins with a Non-Disclosure Agreement (NDA) to help protect your product idea and intellectual property. Information shared before an NDA is in place should be limited to non-confidential project context.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">6. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us using the details below.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">7. Contact</h2>
                <p>
                  For privacy-related questions, please contact FoodNova Consulting at joshikamahendran@gmail.com or +91 9345417620.
                </p>
              </div>

              <div>
                <h2 className="font-display text-base font-semibold text-navy mb-2">8. Changes to This Policy</h2>
                <p>
                  This privacy policy may be updated from time to time. The latest version will always be available on this page with the updated date.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-navy/8">
              <button
                onClick={() => scrollToId('contact')}
                className="text-sm font-semibold text-mint-600 hover:text-mint-700 transition-colors"
              >
                &larr; Back to Contact
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

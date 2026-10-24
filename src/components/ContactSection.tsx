import { useState, type FormEvent } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2, AlertCircle,
  Send, User, Building2, Copy, Check,
} from 'lucide-react';
import { Reveal } from './Reveal';
import { BUSINESS } from '@/data/content';

const SERVICE_OPTIONS = [
  'Food Product Development',
  'Research & Development Consulting',
  'Product Reformulation',
  'Cost Optimization',
  'Process Improvement & Standardization',
  'Sensory Evaluation & Product Refinement',
  'Food Safety & Quality Advisory',
  'Labelling, Packaging & Compliance Guidance',
  'Product Documentation & Handover',
  'Organic Certification Guidance',
  'Not sure yet',
];

const BUSINESS_TYPES = [
  'Startup / entrepreneur',
  'Small-scale manufacturer',
  'Existing food brand',
  'Bakery / food service',
  'Established food company',
  'Other',
];

const PRODUCT_CATEGORIES = [
  'Beverages',
  'Ready-to-eat products',
  'Ready-to-cook products',
  'Bakery and confectionery',
  'Snacks and savouries',
  'Spices and seasonings',
  'Other',
];

const CURRENT_STAGES = [
  'Idea stage',
  'Initial formulation',
  'Existing product improvement',
  'Product standardization',
  'Scale-up / process improvement',
  'Quality / labelling guidance',
  'Other',
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  productCategory: string;
  currentStage: string;
  description: string;
  timeline: string;
  contactMethod: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: '', company: '', email: '', phone: '',
  businessType: '', service: '', productCategory: '',
  currentStage: '', description: '', timeline: '',
  contactMethod: '', consent: false,
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const handleServiceSelect = (e: CustomEvent<{ service: string; category?: string }>) => {
      if (e.detail?.service) {
        setForm((prev) => ({
          ...prev,
          service: e.detail.service,
          ...(e.detail.category ? { productCategory: e.detail.category } : {}),
        }));
      }
    };
    window.addEventListener('select-service' as any, handleServiceSelect as any);
    return () => window.removeEventListener('select-service' as any, handleServiceSelect as any);
  }, []);

  const handleCopy = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone or WhatsApp number.';
    } else if (!/^[+\d\s\-()]{7,20}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!form.description.trim()) e.description = 'Please briefly describe your project.';
    if (!form.consent) e.consent = 'Please consent to be contacted to submit the form.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const update = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const buildWhatsAppMessage = (): string => {
    const lines = [
      `New Project Enquiry from FoodNova Website`,
      ``,
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : '',
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.businessType ? `Business Type: ${form.businessType}` : '',
      form.service ? `Service Required: ${form.service}` : '',
      form.productCategory ? `Product Category: ${form.productCategory}` : '',
      form.currentStage ? `Current Stage: ${form.currentStage}` : '',
      ``,
      `Project Description: ${form.description}`,
      form.timeline ? `Target Timeline: ${form.timeline}` : '',
      form.contactMethod ? `Preferred Contact: ${form.contactMethod}` : '',
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    if (!validate()) return;

    setStatus('submitting');
    try {
      // Frontend-only: open WhatsApp with prefilled enquiry details
      const message = buildWhatsAppMessage();
      const waUrl = `${BUSINESS.whatsapp}?text=${message}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = 'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-light/50 transition-colors focus:outline-none focus:ring-2 focus:ring-mint-300 focus:border-mint-400';
  const labelClass = 'block text-sm font-medium text-navy mb-1.5';
  const errorClass = 'text-xs text-red-500 mt-1';
  const borderError = 'border-red-300';
  const borderNormal = 'border-navy/15';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold tracking-wide text-mint-600 uppercase">Contact</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mt-2">
            Let&rsquo;s Develop Your Next Food Product.
          </h2>
          <p className="text-base text-slate-light mt-4 leading-relaxed">
            Have an idea, a formulation challenge, or a product that needs improvement? Share a few details about your project, and start a conversation with FoodNova Consulting.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact details */}
          <Reveal className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl bg-navy p-6 space-y-5">
              <div>
                <h3 className="font-display text-lg font-semibold text-white mb-1">Business Contact</h3>
                <p className="text-sm text-white/60">{BUSINESS.name}</p>
                <p className="text-sm text-mint-400 font-medium mt-0.5">{BUSINESS.founder}</p>
              </div>

              <div className="flex items-center justify-between group">
                <a href={BUSINESS.phoneLink} className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 group-hover:bg-mint-400/20 transition-colors">
                    <Phone className="h-5 w-5 text-mint-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Phone</p>
                    <p className="text-sm text-white font-medium">{BUSINESS.phone}</p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(BUSINESS.phone, 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg text-white/40 hover:text-mint-400 hover:bg-white/10 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="h-4 w-4 text-mint-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between group">
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 group-hover:bg-mint-400/20 transition-colors">
                    <Mail className="h-5 w-5 text-mint-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Email</p>
                    <p className="text-sm text-white font-medium truncate">{BUSINESS.email}</p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(BUSINESS.email, 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg text-white/40 hover:text-mint-400 hover:bg-white/10 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? (
                    <Check className="h-4 w-4 text-mint-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 group-hover:bg-mint-400/20 transition-colors">
                  <MessageCircle className="h-5 w-5 text-mint-400" />
                </div>
                <div>
                  <p className="text-xs text-white/50">WhatsApp</p>
                  <p className="text-sm text-white font-medium">Chat directly</p>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-mint-400" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Address</p>
                  <p className="text-sm text-white/80 leading-relaxed mt-0.5">
                    {BUSINESS.address.line1}<br />
                    {BUSINESS.address.line2}<br />
                    {BUSINESS.address.line3}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-sage border border-mint-200 p-5">
              <p className="text-sm text-navy leading-relaxed">
                <span className="font-semibold">Prefer not to use the form?</span> Reach out directly via WhatsApp, phone, or email. Sensitive product details can be discussed after an NDA is in place.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-8" delay={100}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/8 bg-ivory p-6 lg:p-8 space-y-5" noValidate>
              {status === 'success' && (
                <div className="flex items-start gap-3 rounded-xl bg-mint-50 border border-mint-200 p-4">
                  <CheckCircle2 className="h-5 w-5 text-mint-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Enquiry ready on WhatsApp</p>
                    <p className="text-sm text-slate-light mt-0.5">
                      A WhatsApp window has opened with your enquiry details pre-filled. Please send the message to complete your enquiry. You can also email us directly at {BUSINESS.email}.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-navy">Something went wrong</p>
                    <p className="text-sm text-slate-light mt-0.5">
                      Please try again, or reach out directly via {BUSINESS.phone} or {BUSINESS.email}.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-mint-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-light/50" />
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`${inputClass} pl-9 ${errors.name ? borderError : borderNormal}`}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company / Brand Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-light/50" />
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={`${inputClass} pl-9 ${borderNormal}`}
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-mint-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={`${inputClass} ${errors.email ? borderError : borderNormal}`}
                    placeholder="you@example.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone / WhatsApp <span className="text-mint-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={`${inputClass} ${errors.phone ? borderError : borderNormal}`}
                    placeholder="+91 ..."
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="businessType" className={labelClass}>Type of Business</label>
                  <select
                    id="businessType"
                    value={form.businessType}
                    onChange={(e) => update('businessType', e.target.value)}
                    className={`${inputClass} ${borderNormal}`}
                  >
                    <option value="">Select...</option>
                    {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>Service Required</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={`${inputClass} ${borderNormal}`}
                  >
                    <option value="">Select...</option>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="productCategory" className={labelClass}>Product Category</label>
                  <select
                    id="productCategory"
                    value={form.productCategory}
                    onChange={(e) => update('productCategory', e.target.value)}
                    className={`${inputClass} ${borderNormal}`}
                  >
                    <option value="">Select...</option>
                    {PRODUCT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentStage" className={labelClass}>Current Product Stage</label>
                  <select
                    id="currentStage"
                    value={form.currentStage}
                    onChange={(e) => update('currentStage', e.target.value)}
                    className={`${inputClass} ${borderNormal}`}
                  >
                    <option value="">Select...</option>
                    {CURRENT_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className={labelClass}>Target Timeline (optional)</label>
                  <input
                    id="timeline"
                    type="text"
                    value={form.timeline}
                    onChange={(e) => update('timeline', e.target.value)}
                    className={`${inputClass} ${borderNormal}`}
                    placeholder="e.g. 2-3 months"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Brief Project Description <span className="text-mint-600">*</span>
                </label>
                <textarea
                  id="description"
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  rows={4}
                  className={`${inputClass} resize-none ${errors.description ? borderError : borderNormal}`}
                  placeholder="Tell us about your product idea, challenge, or what you'd like to improve. Avoid sharing confidential formulation details at this stage."
                  aria-required="true"
                  aria-invalid={!!errors.description}
                />
                {errors.description && <p className={errorClass}>{errors.description}</p>}
              </div>

              <div>
                <label htmlFor="contactMethod" className={labelClass}>Preferred Contact Method (optional)</label>
                <select
                  id="contactMethod"
                  value={form.contactMethod}
                  onChange={(e) => update('contactMethod', e.target.value)}
                  className={`${inputClass} ${borderNormal}`}
                >
                  <option value="">No preference</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-navy/20 text-mint-600 focus:ring-mint-400"
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                  />
                  <span className="text-sm text-slate leading-relaxed">
                    I consent to be contacted by FoodNova Consulting regarding my enquiry. My information will be used solely for this purpose. <span className="text-mint-600">*</span>
                  </span>
                </label>
                {errors.consent && <p className={errorClass}>{errors.consent}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy-700 transition-all shadow-lg shadow-navy/10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </>
                )}
              </button>

              <p className="text-xs text-slate-light leading-relaxed">
                Submitting this form opens WhatsApp with your enquiry details pre-filled. For sensitive product details, please wait until an NDA is in place. Your information is never shared with third parties.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

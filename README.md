# FoodNova Consulting — Premium Food R&D Website

Website for **FoodNova Consulting**, a food product development and R&D consultancy founded by **Joshika Mahendran**, Food Technologist.

---

## 🌐 Live Deployment
- **Live Vercel URL:** [https://spry-viola-jfh4yjj.tmp.now](https://spry-viola-jfh4yjj.tmp.now)
- **Claim Deployment URL (to bind to your Vercel account):** [https://vercel.com/claim-deployment?code=1ccfbd05-f7f7-4e25-88cd-a8d1ff5b0cc6](https://vercel.com/claim-deployment?code=1ccfbd05-f7f7-4e25-88cd-a8d1ff5b0cc6)

---

## 🚀 Technology Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom FoodNova scientific design tokens:
  - Deep scientific navy: `#211747`
  - FoodNova mint green: `#42DFA8`
  - Warm ivory background: `#FCFBF7`
  - Pure white: `#FFFFFF`
  - Slate text: `#343447`
  - Soft sage surface: `#EEF7F1`
  - Muted grey: `#737783`
- **Typography:** Google Fonts (`Plus Jakarta Sans`, `Inter`, `Fraunces`)
- **Icons:** `lucide-react`
- **Hosting / Deployment:** Vercel (configured with `vercel.json` SPA rewrites and caching headers)

---

## 📁 Project Structure & Sections Built
1. **Header & Sticky Navigation (`src/components/Header.tsx`):**
   - Brand wordmark with food science leaf/molecule emblem
   - Navigation links with smooth anchor scrolling
   - Distinctive "Discuss Your Project" CTA
   - Mobile responsive drawer menu with accessible open/close controls
2. **Hero Section (`src/components/HeroSection.tsx`):**
   - Eyebrow: `FOOD PRODUCT DEVELOPMENT & R&D CONSULTING`
   - Headline: *"From Food Ideas to Products Ready for the Market."*
   - Copy: *"Science-driven product development, formulation, process improvement, and practical R&D support for food entrepreneurs and growing businesses."*
   - Direct CTAs: *"Discuss Your Product Idea"* & *"Explore Our Work"*
   - Supporting statements, editorial imagery & subtle scroll cue
3. **Introduction Section (`src/components/IntroductionSection.tsx`):**
   - *"Good Food Ideas Deserve the Right Science."*
   - Three core principles: Science-led development, Quality-focused formulation, Cost-conscious solutions
4. **About Section (`src/components/AboutSection.tsx`):**
   - *"Your Product Development Partner."*
   - 7 key differentiators and verified Udyam registration disclosure: *"Udyam Registered Company"*
5. **Services Directory (`src/components/ServicesSection.tsx`):**
   - Complete 10-service directory with contextual CTAs pre-filling the contact enquiry:
     1. Food Product Development
     2. Research & Development Consulting
     3. Product Reformulation
     4. Cost Optimization
     5. Process Improvement & Standardization
     6. Sensory Evaluation & Product Refinement
     7. Food Safety & Quality Advisory
     8. Labelling, Packaging & Compliance Guidance
     9. Product Documentation & Handover
     10. Organic Certification Guidance
6. **Audience Section (`src/components/AudienceSection.tsx`):**
   - 5 audience groups: Aspiring Entrepreneurs, Food Startups, Small-Scale Food Manufacturers, Growing Food Brands, Bakeries / Cloud Kitchens
7. **Development Process (`src/components/DevelopmentProcess.tsx`):**
   - 3-Phase structured roadmap:
     - Phase 01: Ingredient Research & Cost Optimization (~1–2 days)
     - Phase 02: Product Trials & Processing (~15–90 days)
     - Phase 03: Sensory Evaluation, Refinement & Final Handover
   - Prominent NDA / confidentiality disclosure and clear external testing expense explanation
8. **Featured Projects Portfolio (`src/components/ProjectPortfolio.tsx`):**
   - Filterable portfolio with exact challenge, approach, and reported outcomes:
     - Ready-to-Drink Beverage (Completed)
     - Ready-to-Cook Gravy Mix (Completed)
     - Cashew Laddoo (Completed)
     - Cashew Halwa (Completed)
     - Pepper Cashew Snack (Completed)
     - Carbonated Beverage Innovation (In Development / Phase 3)
     - Freeze-Dried Fruit Snack (In Development)
     - Sugar-Free Sweets & Savouries (Development / Refinement in Progress)
9. **Commercial Product Experience (`src/components/ProductBrandsSection.tsx`):**
   - Brand references: TENTKOTTA, VILVAA, UNAVIFY
10. **Founder Profile (`src/components/FounderSection.tsx`):**
    - Founder: Joshika Mahendran, Food Technologist
    - 3 years industrial experience in food R&D, product development, formulation, sensory evaluation, and quality management
11. **Certifications & Professional Development (`src/components/CertificationsSection.tsx`):**
    - 6 verified development topics: NPD, FSSC 22000 V6, ISO 22000:2018, Food Labelling & Display Regulations 2020, Food Packaging Technology (NPTEL), Diploma in Food Processing
12. **Why FoodNova Section (`src/components/WhyFoodNovaSection.tsx`):**
    - 6 authentic differentiators without fabricated claims
13. **Social Presence (`src/components/SocialLinksSection.tsx`):**
    - Direct links to Instagram, LinkedIn, and YouTube channels
14. **FAQ Accordion (`src/components/FAQSection.tsx`):**
    - 10 comprehensive questions covering timelines, handover, testing fees, NDA, and guarantees
15. **Contact & Enquiry Section (`src/components/ContactSection.tsx`):**
    - Business details: Phone (+91 9345417620), Email (joshikamahendran@gmail.com / foodnovaconsulting@gmail.com), Address (Komarapalayam, Namakkal District, Tamil Nadu – 638183)
    - Comprehensive interactive enquiry form with real-time validation and WhatsApp fallback prefilling full project details
16. **Floating WhatsApp Button (`src/components/WhatsAppFloatingButton.tsx`)**
17. **Privacy Policy (`src/components/PrivacyPolicySection.tsx`) & 404 Page (`src/components/NotFoundPage.tsx`)**

---

## 🛠️ Local Development & Build Commands

All installation and caches are strictly configured to avoid drive `C:`, using `e:\foodnova-main\.npm-cache`.

```bash
# Install dependencies with isolated workspace cache
npm install --cache e:\foodnova-main\.npm-cache

# Run TypeScript type check
npm run typecheck

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deployment Instructions for Vercel
1. You can claim the existing live deployment directly via:
   ```
   https://vercel.com/claim-deployment?code=ddc441d5-2c4e-48f1-9ba9-6044b2313d4c
   ```
2. Or deploy directly from CLI:
   ```bash
   npx --cache e:\foodnova-main\.npm-cache --yes vercel deploy dist --prod
   ```
3. When linking to GitHub/GitLab on Vercel Dashboard:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

# 🚀 Kinetic GPR Pro — Project Roadmap

> **Mission:** Revolutionize GPR analysis for rail infrastructure with AI. Take over the world. Win.

---

## ✅ Phase 1: Marketing Site (COMPLETE)

### Branding & Design
- [x] Custom domain: **gprkinetic.pro**
- [x] Modern, responsive UI with dark theme
- [x] Outfit + JetBrains Mono typography
- [x] Custom logo integration (`kinetic_logo.png`, `main_horizontal_logo.png`)
- [x] Hero banner and cover images

### SEO & Social Sharing
- [x] Complete OpenGraph metadata
- [x] Twitter/X card support (`summary_large_image`)
- [x] Favicon + Apple touch icon
- [x] Web manifest for PWA
- [x] Meta keywords for SEO
- [x] Canonical URLs configured

### Content Sections
- [x] Hero with email capture
- [x] Problem statement (the $23B opportunity)
- [x] Solution showcase (AI-powered analysis)
- [x] Tech showcase with metrics (86% accuracy, 70% faster)
- [x] Target markets (Class I railroads, consultants, transit)
- [x] CTA with full waitlist form
- [x] Footer with LinkedIn + contact

### Form & Email System
- [x] Waitlist API route (`/api/waitlist`)
- [x] Form captures: name, email, company, role
- [x] Resend integration for email notifications
- [x] Sends to: **panda@juche.org**
- [x] Local env configured (`.env.local`)
- [x] Vercel env variable added

### Email Domain (IN PROGRESS)
- [x] Subdomain created: `forms.gprkinetic.pro`
- [ ] DNS propagating... (wait 5-60 min)
- [ ] Update `EMAIL_FROM` once verified

---

## 🔜 Phase 2: Coming Soon

### Quick Wins
- [ ] Verify `forms.gprkinetic.pro` in Resend
- [ ] Update email sender to `noreply@forms.gprkinetic.pro`
- [ ] Add Google Analytics / Plausible for visitor tracking
- [ ] Set up email sequences for waitlist (welcome email)

### Content & Engagement
- [ ] Blog section for GPR industry insights
- [ ] Case study pages
- [ ] Video demo embed
- [ ] Testimonials section (once you have beta users)

### Technical Enhancements
- [ ] Waitlist dashboard (view signups)
- [ ] Export waitlist to CSV
- [ ] Automated email sequences (drip campaign)
- [ ] A/B testing for conversion optimization

---

## 🎯 Phase 3: Product Launch

### Platform Development
- [ ] User authentication system
- [ ] GPR data upload interface
- [ ] AI analysis dashboard
- [ ] Report generation
- [ ] API for enterprise integrations

### Growth
- [ ] Beta user program
- [ ] Early adopter pricing
- [ ] Partner program for consultants
- [ ] Trade show presence (Railway Interchange, etc.)

---

## 🌍 Phase 4: World Domination

### Scale
- [ ] Multi-region infrastructure
- [ ] Enterprise contracts with Class I railroads
- [ ] International expansion (Europe, Asia rail networks)
- [ ] Government/transit authority partnerships

### Moat
- [ ] Proprietary training data from beta users
- [ ] Patent portfolio for AI/GPR methods
- [ ] Industry standard certification
- [ ] Acquisition targets or acquirer conversations

---

## 📊 Key Metrics to Track

| Metric | Current | Goal (6mo) | Goal (12mo) |
|--------|---------|------------|-------------|
| Waitlist signups | 0 | 500 | 2,000 |
| Monthly site visitors | - | 5,000 | 25,000 |
| Beta users | 0 | 10 | 50 |
| Paying customers | 0 | 5 | 25 |
| ARR | $0 | $50K | $500K |

---

## 🔧 Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4, TypeScript
- **Hosting:** Vercel
- **Email:** Resend (forms.gprkinetic.pro)
- **Domain:** GoDaddy → gprkinetic.pro
- **Repo:** github.com/outlierclothiers/eagle

---

## 📁 Key Files

```
/app
  /api/waitlist/route.ts  ← Form submission handler
  layout.tsx              ← Metadata, fonts, SEO
  page.tsx                ← Main landing page

/components
  hero-section.tsx        ← Email capture
  cta-section.tsx         ← Full waitlist form
  navigation.tsx          ← Header with logo
  footer.tsx              ← Links, LinkedIn, contact

/public
  favicon.png             ← Browser tab icon
  opengraph.png           ← Social share image
  kinetic_logo.png        ← Square logo
  main_horizontal_logo.png← Wide logo
  readmecover.png         ← GitHub README header
```

---

## 🏆 The Vision

Kinetic GPR Pro will become the **industry standard** for AI-powered GPR analysis in rail infrastructure. We're not just building software — we're building the future of how railroads maintain their networks.

**The $23B maintenance market is waiting. Let's fucking win.** 🚂💨

---

*Last updated: January 18, 2026*

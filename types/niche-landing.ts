import type { LocaleString } from "./project";

// ─── Hero ─────────────────────────────────────────────────────────────────────
export interface NicheHeroData {
  headline: LocaleString;
  subheadline: LocaleString;
  ctaPrimary: LocaleString;
  ctaSecondary: LocaleString;
}

// ─── Pain Section ─────────────────────────────────────────────────────────────
export interface PainSectionData {
  heading: LocaleString;
  bullets: LocaleString[];
  closingLine: LocaleString;
}

// ─── Offer ────────────────────────────────────────────────────────────────────
export interface NicheOfferData {
  heading: LocaleString;
  subheading: LocaleString;
  badgeText: LocaleString;
  /** Not translated — always a formatted price string, e.g. "$2,497" */
  price: string;
  /** Not translated — original/crossed-out price, e.g. "$3,500" */
  regularPrice: string;
  offerCopy: LocaleString;
  deliveryTime: LocaleString;
}

// ─── Includes ─────────────────────────────────────────────────────────────────
export interface IncludeItem {
  title: LocaleString;
  description: LocaleString;
}

// ─── ROI Math ─────────────────────────────────────────────────────────────────
export interface RoiMathData {
  heading: LocaleString;
  copy: LocaleString;
  ctaText: LocaleString;
}

// ─── Trust ────────────────────────────────────────────────────────────────────
export interface TrustData {
  heading: LocaleString;
  bullets: LocaleString[];
  closingLine: LocaleString;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface NicheFaqItem {
  question: LocaleString;
  answer: LocaleString;
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
export interface FinalCtaData {
  heading: LocaleString;
  copy: LocaleString;
  ctaPrimary: LocaleString;
  ctaSecondary: LocaleString;
}

// ─── Root Data Shape ──────────────────────────────────────────────────────────
export interface NicheLandingData {
  /** Unique identifier and URL slug — e.g. "dental" → /dental */
  id: string;
  slug: string;
  nicheName: LocaleString;
  /** Single emoji shown next to the niche badge */
  nicheEmoji: string;
  contactEmail: string;
  /** Primary CTA href — Calendly link, mailto, or any absolute URL */
  primaryCtaHref: string;
  /** Urgency/scarcity badge shown in NicheNav and NicheFooter */
  availabilityBadge: LocaleString;
  metaTitle: LocaleString;
  metaDescription: LocaleString;

  // ── Sections ─────────────────────────────────────────────────────────────
  hero: NicheHeroData;
  painSection: PainSectionData;
  offer: NicheOfferData;
  includes: IncludeItem[];
  /** Each exclude is a short bilingual string — rendered with strikethrough */
  excludes: LocaleString[];
  roiMath: RoiMathData;
  trust: TrustData;
  faq: NicheFaqItem[];
  finalCta: FinalCtaData;
}

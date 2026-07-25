export interface ServiceData {
  id: string;
  name: string;
  tagline: string;
  regularPrice: string;
  foundingPrice: string;
  spotsLeft: number;
  deliveryTime: string;
  paymentTerms: string;
  includes: string[];
  excludes: string[];
  ctaLabel: string;
}

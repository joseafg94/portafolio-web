import { LocaleString } from "./project";

export interface ServiceData {
  id: string;
  name: LocaleString;
  tagline: LocaleString;
  regularPrice: string;
  foundingPrice: string;
  spotsLeft: number;
  deliveryTime: string;
  paymentTerms: string;
  includes: LocaleString[];
  excludes: LocaleString[];
  ctaLabel: LocaleString;
  foundingNotice?: LocaleString;
  retainerNote?: LocaleString;
}

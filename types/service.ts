import { LocaleString } from "./project";

export interface ServiceData {
  id: string;
  name: LocaleString;
  tagline: LocaleString;
  regularPrice: LocaleString;
  foundingPrice: LocaleString;
  spotsLeft: number;
  deliveryTime: LocaleString;
  paymentTerms: LocaleString;
  includes: LocaleString[];
  excludes: LocaleString[];
  ctaLabel: LocaleString;
  foundingNotice?: LocaleString;
  retainerNote?: LocaleString;
}

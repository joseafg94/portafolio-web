import { LocaleString } from "./project";

export interface ServiceData {
  id: string;
  name: LocaleString;
  tagline: LocaleString;
  regularPrice: LocaleString;
  foundingPrice: LocaleString;
  spotsTaken: number;
  spotsTotal: number;
  deliveryTime: LocaleString;
  paymentTerms: LocaleString;
  includes: LocaleString[];
  excludes: LocaleString[];
  ctaLabel: LocaleString;
  foundingHeadline?: LocaleString;
  foundingNotice?: LocaleString;
  retainerNote?: LocaleString;
}

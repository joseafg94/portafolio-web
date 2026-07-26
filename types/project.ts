export type ProjectCategory = "web" | "app" | "saas" | "platform";
export type ProjectStatus = "live" | "in-progress" | "concept";

/** Bilingual string — all user-visible text fields use this shape. */
export interface LocaleString {
  en: string;
  es: string;
}

export interface ProjectMetric {
  label: LocaleString;
  value: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  /** Product/brand name — not translated. */
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: number;

  problem: LocaleString;
  solution: LocaleString;
  result: LocaleString;

  metrics?: ProjectMetric[];
  techStack: string[];

  images: {
    cover: string;
    gallery?: string[];
  };

  liveUrl?: string;
  loomUrl?: string;
  testimonial?: {
    quote: LocaleString;
    author: string;
    role: string;
  };
}

export type ProjectCategory = "web" | "app" | "saas" | "platform";
export type ProjectStatus = "live" | "in-progress" | "concept";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: number;

  problem: string;
  solution: string;
  result: string;

  metrics?: ProjectMetric[];
  techStack: string[];

  images: {
    cover: string;
    gallery?: string[];
  };

  liveUrl?: string;
  loomUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

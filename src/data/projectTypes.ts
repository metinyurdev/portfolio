export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ArchitectureDetailItem {
  title: string;
  description: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  metrics: string[];
  stack: string[];
  github: string;
  demoLabel: string;
  images?: ProjectImage[];
  architectureDetails?: ArchitectureDetailItem[];
}
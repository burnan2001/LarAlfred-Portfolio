
export type Page = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  year: string;
  role: string;
  demoType: 'terminal' | 'analytics' | 'visualizer';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

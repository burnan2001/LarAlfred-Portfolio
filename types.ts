
export type Page = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
}

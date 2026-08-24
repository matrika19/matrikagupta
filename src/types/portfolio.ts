export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  category: 'IoT' | 'Hardware' | 'Smart Systems' | 'AI & Sensors';
  status: string;
  illustrationType: 'dustbin-iot' | 'noise-sensor';
  detailedOverview: string;
  technicalHighlights: string[];
  componentsUsed: string[];
  systemFlow: string[];
  links?: {
    demo?: string;
    repo?: string;
    docs?: string;
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  focusAreas: string[];
  badgeColor?: string;
}

export interface Strength {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  specialization: string;
  location: string;
  status: string;
  timeline: string;
  overview: string;
  keySubjects: string[];
}

export interface AboutCard {
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

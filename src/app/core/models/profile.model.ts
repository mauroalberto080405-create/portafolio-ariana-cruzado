export interface ProfileSummary {
  fullName: string;
  preferredName: string;
  headline: string;
  location: string;
  email: string;
  phone?: string; // Reservado para uso privado o autorizado
  linkedInUrl?: string;
  aboutNarrative: string[];
  keyStrengths: string[];
  ctaButtons: {
    label: string;
    url: string;
    isExternal?: boolean;
    isDownload?: boolean;
    type: 'primary' | 'secondary' | 'outline';
  }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  businessType: string;
  period: string;
  isCurrent: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  verifiedScope: string;
  skillsApplied: string[];
  evidenceLinks?: { label: string; url: string; iconType: 'instagram' | 'web' | 'external' }[];
}

export interface AcademicEducation {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string; // Ej: "8.º ciclo (en curso)"
  description?: string;
}

export interface InternationalExperience {
  id: string;
  title: string;
  type: 'curso' | 'mision-academica' | 'certificacion';
  destination: string;
  period?: string;
  entity?: string;
  description: string;
  competencies: string[];
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    levelDeclared?: string;
    context: string;
  }[];
}

export interface LanguageSkill {
  language: string;
  level: string;
  details?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  area: string;
  status: 'documentado' | 'en_desarrollo';
  context: string;
  objective: string;
  roleContribution: string;
  actionsTaken: string[];
  toolsUsed: string[];
  learningsAndResults: string;
}

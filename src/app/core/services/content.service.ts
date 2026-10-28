import { InjectionToken } from '@angular/core';
import {
  ProfileSummary,
  WorkExperience,
  AcademicEducation,
  InternationalExperience,
  SkillCategory,
  LanguageSkill,
  CaseStudy
} from '../models/profile.model';

export interface IContentService {
  getProfile(): ProfileSummary;
  getExperiences(): WorkExperience[];
  getEducation(): AcademicEducation[];
  getInternationalExperiences(): InternationalExperience[];
  getSkillCategories(): SkillCategory[];
  getLanguages(): LanguageSkill[];
  getCaseStudies(): CaseStudy[];
}

export const CONTENT_SERVICE_TOKEN = new InjectionToken<IContentService>('CONTENT_SERVICE_TOKEN');

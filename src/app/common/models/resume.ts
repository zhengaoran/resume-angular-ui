import { Certification } from './certification';
import { Project } from './project';
import { Skill } from './skill';
import { Work } from './work';

export interface Resume {
  name: string;
  position: string;
  introduction: string;
  contact: {label: string; value: string}[];
  workHistory: Work[];
  education: {label: string; value: string | string[]};
  skillSet: Skill[];
  projects: Project[];
  certifications: Certification[];
}

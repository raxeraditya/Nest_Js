import { JobType } from '../Constants/TypesJob';

export class Job {
  companyName: string;
  title: string;
  email: string;
  type: JobType;
  experience: number;
  salary: number;
  tags: string[];
  isActive: boolean;
  refId: string;
  id: number;
}

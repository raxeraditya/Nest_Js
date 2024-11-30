import { JobsApplicantModule } from './jobs-aplicant/jobs-applicant.module';
import { JobsModule } from './jobs.module';

const JobsRoute = [
  {
    path: '/api',
    module: JobsModule,
    children: [
      {
        path: '/job-applicant',
        module: JobsApplicantModule,
      },
    ],
  },
];
export { JobsRoute };

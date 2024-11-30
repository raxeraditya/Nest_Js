import { Module } from '@nestjs/common';
import { JobsApplicantController } from './jobs-applicant.controller';

@Module({
  providers: [],
  controllers: [JobsApplicantController],
  imports: [],
})
export class JobsApplicantModule {}

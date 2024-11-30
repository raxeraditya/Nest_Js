import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobController } from './jobs.controller';
import { JobsApplicantModule } from './jobs-aplicant/jobs-applicant.module';

@Module({
  imports: [JobsApplicantModule],
  exports: [],
  controllers: [JobController],
  providers: [JobsService],
})
export class JobsModule {}

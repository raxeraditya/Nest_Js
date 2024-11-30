import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { AppRoute } from './approute.module';

@Module({
  imports: [JobsModule, AppRoute],
  controllers: [],
  providers: [],
})
export class AppModule {}

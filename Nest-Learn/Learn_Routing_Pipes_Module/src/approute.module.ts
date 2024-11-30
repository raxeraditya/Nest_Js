import { Module } from '@nestjs/common';
import { JobsRoute } from './jobs/jobs.route';
import { RouterModule } from '@nestjs/core';

const Route = [...JobsRoute];
@Module({
  imports: [RouterModule.register(Route)],
  exports: [RouterModule],
})
export class AppRoute {}

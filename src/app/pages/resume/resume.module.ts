import { NgModule } from '@angular/core';

import { CommonModule } from '../../common/common.module';
import { ResumeRoutingModule } from './resume-routing.module';

import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule,
  ],
  declarations: [ResumeComponent],
  exports: [],
})
export class ResumeModule {}

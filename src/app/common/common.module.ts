import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModaule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { IconsProviderModule } from '../icons-provider.module';

import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [
    AngularCommonModaule,
    IconsProviderModule,
    NzButtonModule,
    NzCardModule,
    NzListModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzPopoverModule,
    NzTableModule,
    NzTagModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTypographyModule,
  ],
  declarations: [
    CertificationsComponent,
    ContactComponent,
    EducationComponent,
    ProjectsComponent,
    WorkDetailsComponent,
    WorkHistoryComponent,
    SkillsComponent,
  ],
  exports: [
    AngularCommonModaule,
    IconsProviderModule,
    NzButtonModule,
    NzCardModule,
    NzListModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzPopoverModule,
    NzTableModule,
    NzTagModule,
    NzTimelineModule,
    NzTypographyModule,
    NzToolTipModule,
    CertificationsComponent,
    ContactComponent,
    EducationComponent,
    ProjectsComponent,
    WorkDetailsComponent,
    WorkHistoryComponent,
    SkillsComponent,
  ],
})
export class CommonModule {}

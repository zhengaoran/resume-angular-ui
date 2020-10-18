import { Component, OnInit } from '@angular/core';

import { Resume } from 'src/app/common/models/resume';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  // TODO: create http interceptor for spinner
  public loading: boolean = false;
  public resume: Resume = null;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.loading = true;
    this.resumeService.getResume().subscribe((response: Resume) => {
      this.resume = response;
      this.loading = false;
    });
  }
}

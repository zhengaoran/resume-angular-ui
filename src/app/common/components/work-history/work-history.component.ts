import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../models/work';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  @Input() workHistory: Work[];

  constructor() { }

  ngOnInit(): void {
  }

}

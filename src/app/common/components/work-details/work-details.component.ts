import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../models/work';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {

  @Input() work: Work;

  public showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(stage) {
    this.showModal = stage;
  }

}

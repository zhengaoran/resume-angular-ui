import { Component, Input, OnInit } from '@angular/core';
import { Certification } from '../../models/certification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  @Input() certifications: Certification[];

  constructor() { }

  ngOnInit(): void {
  }

}

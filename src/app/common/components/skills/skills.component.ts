import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skillSet: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}

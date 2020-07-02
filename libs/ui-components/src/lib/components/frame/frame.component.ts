import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person-model';

@Component({
  selector: 'personnel-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input()
  person: Person;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  @Input() name: string

  ngOnInit() {
  }

}

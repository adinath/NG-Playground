import { Component, OnInit, Input } from '@angular/core';
import { Address } from './address-model';

@Component({
  selector: 'current-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent{
  @Input()
  address : Address

  constructor() {
   }

}

import { Component, OnInit, Input } from '@angular/core';
import { Address } from './address-model';

@Component({
  selector: 'jarvis-playgroud-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent{
  address : Address

  constructor() {
   }

}

import { Component } from '@angular/core';
import { Address } from '@jarvis-playgroud/ui-components'

@Component({
  selector: 'jarvis-playgroud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "CROW's Club!!";
  address: Address;
  name: String;
  constructor(){
    this.name = "Kaz Brekker";
    this.address = {
      streetAddress: '222 Main st',
      apartment: '1232',
      city: 'Ketterdam',
      stateCode: 'Z0',
      zip: '32321'
    }
  }
}

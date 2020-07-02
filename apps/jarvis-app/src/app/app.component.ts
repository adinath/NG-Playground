import { Component } from '@angular/core';
import { Person } from '@jarvis-playgroud/ui-components'

@Component({
  selector: 'jarvis-playgroud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "CROW's Club!!";
  person: Person;

  constructor(){
  this.person = {
    name: "Kaz Brekker",
    address: {
      streetAddress: '222 Main st',
      apartment: '1232',
      city: 'Ketterdam',
      stateCode: 'Z0',
      zip: '32321'
    },
   image: "someImage"
  }
  }
}

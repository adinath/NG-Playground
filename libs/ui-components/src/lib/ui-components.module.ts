import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { NameComponent } from './components/name/name.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddressComponent, NameComponent],
  exports: [AddressComponent, NameComponent]
})
export class UiComponentsModule {}

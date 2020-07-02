import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { NameComponent } from './components/name/name.component';
import { FrameComponent } from './components/frame/frame.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddressComponent, NameComponent, FrameComponent],
  exports: [AddressComponent, NameComponent, FrameComponent]
})
export class UiComponentsModule {}

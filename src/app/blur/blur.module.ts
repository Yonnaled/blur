import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlurComponent } from './blur.component';

@NgModule({
  declarations: [
    BlurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    BlurComponent
  ],
  bootstrap: [BlurComponent]
})
export class BlurModule { }

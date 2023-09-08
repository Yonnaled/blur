import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BlurModule} from "./blur/blur.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BlurModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

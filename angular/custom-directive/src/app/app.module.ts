import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoveredDirective } from './hovered.directive';
import { EvenDirective } from './even.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoveredDirective,
    EvenDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

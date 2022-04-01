import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleButtonDemoComponent } from './simple-button-demo/simple-button-demo.component';
import { NavContainerComponent } from './nav-container/nav-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleButtonDemoComponent,
    NavContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

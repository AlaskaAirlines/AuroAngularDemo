import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleButtonDemoComponent } from './simple-button-demo/simple-button-demo.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { AppRoutingModule } from './app-routing.module';
import { StartInfoComponent } from './start-info/start-info.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleButtonDemoComponent,
    NavContainerComponent,
    StartInfoComponent,
    ComplexFormComponent,
    CheckboxDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

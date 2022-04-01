import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { SimpleButtonDemoComponent } from './simple-button-demo/simple-button-demo.component';
import { StartInfoComponent } from './start-info/start-info.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartInfoComponent
  },
  {
    path: 'simple-buttons',
    component: SimpleButtonDemoComponent
  },
  {
    path: 'complex-form',
    component: ComplexFormComponent
  },
  {
    path: 'checkbox-demo',
    component: CheckboxDemoComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
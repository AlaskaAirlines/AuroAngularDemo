import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss']
})
export class CheckboxDemoComponent {
  formGroup: FormGroup;
  departureAssist: AbstractControl;
  arrivalAssist: AbstractControl;

  testVal: boolean;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      departureAssist: [true, []],
      arrivalAssist: [false, []],
    });
    this.departureAssist = this.formGroup.controls.departureAssist;
    this.arrivalAssist = this.formGroup.controls.arrivalAssist;

    this.testVal = true;
  }
}

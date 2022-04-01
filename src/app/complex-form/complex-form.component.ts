import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent {
  formGroup: FormGroup;
  firstName: AbstractControl;
  middleName: AbstractControl;
  lastName: AbstractControl;
  departureAssist: AbstractControl;
  arrivalAssist: AbstractControl;

  testVal: boolean;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', []],
      lastName: ['', [Validators.required]],
      departureAssist: [true, [Validators.required]],
      arrivalAssist: [false, [Validators.required]],
    });
    this.firstName = this.formGroup.controls.firstName;
    this.middleName = this.formGroup.controls.middleName;
    this.lastName = this.formGroup.controls.lastName;
    this.departureAssist = this.formGroup.controls.departureAssist;
    this.arrivalAssist = this.formGroup.controls.arrivalAssist;

    this.testVal = true;
  }

}

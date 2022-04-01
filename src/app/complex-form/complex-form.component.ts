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
  desert: AbstractControl;

  testVal: boolean;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', []],
      lastName: ['', [Validators.required]],
      desert: ['no', [Validators.required]],
    });
    this.firstName = this.formGroup.controls.firstName;
    this.middleName = this.formGroup.controls.middleName;
    this.lastName = this.formGroup.controls.lastName;
    this.desert = this.formGroup.controls.desert;

    this.testVal = true;
  }

}

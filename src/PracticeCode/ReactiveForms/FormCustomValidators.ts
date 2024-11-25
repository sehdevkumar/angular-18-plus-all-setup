import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'form-custom-validator',
  standalone: true,
  template: `
    <div class="w-full h-full flex justify-center items-center">
      Hey, this is a Custom Validator Check

      <form [formGroup]="customValidatorFormGroup">
        <input
          class="border border-gray-300 rounded-lg p-2"
          type="text"
          formControlName="searchText"
          maxlength="20"
          [ngClass]="{
            'border-red-600':
              customValidatorFormGroup?.get('searchText')?.invalid
          }"
        />

        <span
          *ngIf="
            customValidatorFormGroup?.get('searchText')?.hasError('badwords')
          "
        >
          The text contains bad words!
        </span>

        <span
          *ngIf="
            customValidatorFormGroup?.get('searchText')?.hasError('invalidUser')
          "
        >
         User to invalid hai ab kea hi kr skte hai sorry
        </span>
      </form>
    </div>
  `,
  imports: [ReactiveFormsModule, NgIf, NgClass],
})
export class FormCustomValidators {
  fb = inject(FormBuilder);
  customValidatorFormGroup!: FormGroup;

  constructor() {
    this.customValidatorFormGroup = this.fb.group({
      searchText: [
        '',
        [Validators.maxLength(20), BadWordsValidators()],
        [userVerfiedValidator()],
      ],
    });
  }
}

function userVerfiedValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null>=> {
        return of(200).pipe(delay(2000),map(d=>  d===200 ?  {invalidUser: true} as ValidationErrors : null))
      }
}

// Custom Validator Function
function BadWordsValidators(): ValidatorFn {
  const badWords = ['badword1', 'badword2']; // Replace with actual bad words
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const hasBadWord = badWords.some((word) => control.value.includes(word));
    return hasBadWord ? { badwords: true } : null;
  };
}

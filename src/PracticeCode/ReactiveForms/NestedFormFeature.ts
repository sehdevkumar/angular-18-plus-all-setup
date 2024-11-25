import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nested-form-feature',
  template: `
    <form
      [formGroup]="nestedForm"
      class="grid grid-cols-1 gap-4 p-4 max-w-sm mx-auto bg-white rounded-lg shadow-lg"
    >
      <div class="flex flex-col space-y-2">
        <label class="text-gray-700 font-bold" for="employeeName"
          >Employee Name</label
        >
        <input
          class="border border-gray-300 rounded-lg p-2"
          formControlName="employeeName"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex items-center space-x-2">
          <label class="text-gray-700 font-bold" for="office.name"
            >Office Details</label
          >
          <div class="flex space-x-2">
            <input
              class="border border-gray-300 rounded-lg p-2"
              formControlName="name"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div
            class="flex flex-col space-y-2"
            *ngFor="
              let item of getOfficeControls.controls;
              let i = index;
              trackBy: trackByFn
            "
          >
            <div class="flex items-center space-x-2">
              <label class="text-gray-700 font-bold" for="localtions-{{ i }}"
                >Location {{ i + 1 }}</label
              >
            </div>
            <div class="grid grid-cols-2 gap-4">
              <input
                class="border border-gray-300 rounded-lg p-2"
                formControlName="latLong"
              />
              <input
                class="border border-gray-300 rounded-lg p-2"
                formControlName="country"
              />
            </div>
          </div>

          <button type="button" (click)="addLocation()">Add Location</button>
        </div>
      </div>
    </form>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class NestedFormFeature {
  addLocation() {
    this.getOfficeControls.push(
      this.fb.group({
        latLong: [],
        country: [],
      })
    );
  }
  nestedForm!: FormGroup;
  fb = inject(FormBuilder);

  trackByFn(index: number, item: AbstractControl) {
    return index;
  }

  get getOfficeControls() {
    return (this.nestedForm.get('office') as FormGroup).get(
      'localtions'
    ) as FormArray<any>;
  }

  constructor() {
    this.nestedForm = this.fb.group({
      employeeName: ['', Validators.required],
      office: this.fb.group({
        name: ['', Validators.required],
        localtions: this.fb.array([
          this.fb.group({
            latLong: [],
            country: [],
          }),
        ]),
      }),
    });

    console.log(this.getOfficeControls);

    this.getOfficeControls.patchValue(['employeeName']);
  }
}

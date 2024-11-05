import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button"
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon"
@Component({
  selector: 'app-useformarray',
  templateUrl: './useformarray.component.html',
  styleUrls: ['./useformarray.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UseformarrayComponent implements OnInit {
  personalDetails!: FormGroup;
  fb = inject(FormBuilder);

  constructor() {}

  ngOnInit() {
    this.constructForm();
  }

  constructForm() {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.array([
        this.fb.group({
          permanentAddress: ['', Validators.required],
          currentAddress: ['', Validators.required],
          zipCode: ['', [Validators.required, Validators.minLength(5)]],
        }),
      ]),
    });
  }

  get address(): FormArray {
    return this.personalDetails.get('address') as FormArray;
  }

  addAddress() {
    this.address.push(
      this.fb.group({
        permanentAddress: ['', Validators.required],
        currentAddress: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.minLength(5)]],
      })
    );
  }

  onDetails() {
    console.log(this.personalDetails, 'please check this personal details');
  }

  deleteField(i:number){
    this.address.removeAt(i)
  }
}

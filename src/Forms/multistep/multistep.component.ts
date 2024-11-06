import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

type stepType =
  | 'uploadResume'
  | 'myInformation'
  | 'address'
  | 'experience'
  | 'education'
  | 'profile'
  | 'preview'
  | null;

@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.css'],
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule,ReactiveFormsModule,MatFormFieldModule , MatIconModule ,MatInputModule,MatLabel],
})
export class MultistepComponent implements OnInit {
  constructor() {}

  userDetailsForm!: FormGroup;
  fb = inject(FormBuilder);

  userDetails = signal<
    Array<{
      stepName: stepType;

      displayname: string;
      state: boolean;
    }>
  >([
    {
      stepName: 'uploadResume',
      displayname: 'upload resume',
      state: false,
    },
    {
      stepName: 'myInformation',
      displayname: 'My Information',
      state: false,
    },
    {
      stepName: 'address',
      displayname: 'address',
      state: false,
    },
    {
      stepName: 'experience',
      displayname: 'experience',
      state: false,
    },
    {
      stepName: 'education',
      displayname: 'education',
      state: false,
    },
    {
      stepName: 'profile',
      displayname: 'profile',
      state: false,
    },
    {
      stepName: 'preview',
      displayname: 'preview',
      state: false,
    },
  ]);

  currentStateIndex = signal<number>(0);

  get addressForm() {
    return this.userDetailsForm.get('address') as FormArray;
  }

  get getExperienceForm() {
    return ((this.userDetailsForm.get('experience') as any)?.controls.experiences as FormArray)
  }

  get getEducationForm() {
    return this.userDetailsForm.get('education') as FormArray;
  }

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      uploadResume: this.fb.group({
        file: ['', Validators.required],
      }),

      myInformation: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
      }),

      address: this.fb.array([
        this.fb.group({
          country: ['', Validators.required],
          address1: ['', Validators.required],
          address2: ['', Validators.required],
          zipCode: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
        }),
      ]),

      experience: this.fb.group({
        totalExperience: ['', Validators.required],
        experiences: this.fb.array([
          this.fb.group({
            jobTitle: ['', Validators.required],
            company: ['', Validators.required],
            from: ['', Validators.required],
            to: [''],
          }),
        ]),
      }),

      education: this.fb.array([
        this.fb.group({
          university: ['', Validators.required],
          degree: ['', Validators.required],
          field: ['', Validators.required],
          from: ['', Validators.required],
          to: ['', Validators.required],
        }),
      ]),

      profile: this.fb.group({
        image: ['', Validators.required],
      }),
    });

    console.log(this.userDetailsForm)
  }

  onMaintainedState() {
    const details = this.userDetails();
    const finalDetails = details.map((d, i) => {
      if (this.currentStateIndex() < i + 1) {
        d.state = false;
      } else {
        d.state = true;
      }
      return d;
    });

    this.userDetails.set(finalDetails);
  }

  onNext() {
    let index = this.currentStateIndex();
    if (index < this.userDetails().length) {
      index++;
      this.currentStateIndex.set(index);
    }
    this.onMaintainedState();
  }
  onBack() {
    let index = this.currentStateIndex();
    if (index > 0) {
      index--;
      this.currentStateIndex.set(index);
    }
    this.onMaintainedState();
  }
}

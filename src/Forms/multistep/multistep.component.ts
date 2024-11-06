import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
  imports: [CommonModule, MatProgressBarModule, MatButtonModule],
})
export class MultistepComponent implements OnInit {
  constructor() {}

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

  ngOnInit() {}

  onMaintainedState() {
    const details = this.userDetails();
    const finalDetails = details.map((d, i) => {
      if (this.currentStateIndex() < i+1) {
        d.state = false;
      }else{
         d.state = true
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
    this.onMaintainedState()
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

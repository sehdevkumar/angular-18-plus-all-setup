import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.css'],
  standalone:true,
  imports: [CommonModule , MatProgressBarModule]
})
export class MultistepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

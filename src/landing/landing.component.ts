import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LandingComponent implements OnInit {
  landingData = signal<
    Array<{
      name: string;
      path: string;
    }>
  >([
    {
      name: 'home',
      path: '',
    },

    {
      name: 'Use Form Array',
      path: 'use-form-array',
    },
  ]);

  constructor() {}

  ngOnInit() {}
}

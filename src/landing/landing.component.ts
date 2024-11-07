import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class LandingComponent implements OnInit {
  landingData = signal<
    Array<{
      name: string;
      path: string;
    }>
  >([
    {
      name: 'Use Form Array',
      path: 'use-form-array',
    },
    {
      name: 'Multi Step',
      path: 'multi-step-form',
    },
    {
      name: 'Rxjs Creator Operators',
      path: 'rxjs-creator-opts',
    },
    {
      name: 'Rxjs Join Operators',
      path: 'rxjs-join-opts',
    },
  ]);

  constructor() {}

  ngOnInit() {}
}

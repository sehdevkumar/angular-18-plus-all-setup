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
      color?: string;
    }>
  >([
    {
      name: 'Use Form Array',
      path: 'use-form-array',
      color: '#FFB74D', // Soft Amber, warm and attention-grabbing
    },
    {
      name: 'Multi Step',
      path: 'multi-step-form',
      color: '#64B5F6', // Light Blue, for a cool and calm feel
    },
    {
      name: 'Rxjs Creator Operators',
      path: 'rxjs-creator-opts',
      color: '#81C784', // Light Green, to convey growth and activity
    },
    {
      name: 'Rxjs Join Operators',
      path: 'rxjs-join-opts',
      color: '#BA68C8', // Lavender, adds a creative touch
    },
    {
      name: 'Rxjs Transformation Operators',
      path: 'rxjs-transformation-opts',
      color: '#FF8A65', // Coral, bright and dynamic
    },
    {
      name: 'Ngrx Store',
      path: 'ngrx-store',
      color: '#4DB6AC', // Teal, to represent stability and trustworthiness
    },
    {
      name: 'Change Detection',
      path: 'change-detection',
      color: '#4D76AC', // Teal, to represent stability and trustworthiness
    },
    {
      name: 'Http Calls',
      path: 'http-calls',
      color: "#f676de"
    },
  ]);

  constructor() {}

  ngOnInit() {}
}

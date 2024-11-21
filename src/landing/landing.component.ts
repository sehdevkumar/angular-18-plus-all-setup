import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class LandingComponent implements OnInit {
  fake = inject(FakeService);

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
      color: '#f676de',
    },
    {
      name: 'Dynamic Load Component',
      path: 'dynamic-load-component',
      color: '#fc0606',
    },
    {
      name: 'Content Projects',
      path: 'content-projection',
      color: '#000006',
    },
    {
      name: 'Injectors Hierarchy',
      path: 'injector-hierarchy',
      color: '#99ff06',
    },
    {
      name: 'Injection Tokens',
      path: 'injection-tokens',
      color: '#62ff06',
    },
    {
      name: 'Directives',
      path: 'directives',
      color: '#62EC06',
    },
    {
      name: 'Pipes',
      path: 'pipes',
      color: '#62eef6',
    },
    {
      name: 'Localization',
      path: 'localization',
      color: '#62eef6',
    },
  ]);

  constructor() {}

  ngOnInit() {
    console.log(this.fake, 'now data');
  }
}

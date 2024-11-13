import { map } from 'rxjs';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
  selector: 'app-ContentProjections',
  templateUrl: './ContentProjections.component.html',
  styleUrls: ['./ContentProjections.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, CustomCardComponent],
})
export class ContentProjectionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

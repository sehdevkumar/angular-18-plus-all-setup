import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class CustomCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

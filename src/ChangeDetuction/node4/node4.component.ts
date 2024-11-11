import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-node4',
  templateUrl: './node4.component.html',
  styleUrls: ['./node4.component.css'],
  standalone: true,
  imports: [CommonModule,MatButtonModule],
})
export class Node4Component implements OnInit {
  
  counter$ = 0;

  constructor() {}

  ngOnInit() {}
  

  onIncrease() {
    this.counter$++;
  }

  onDecrease() {
    this.counter$--;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node3Component } from '../node3/node3.component';

@Component({
  selector: 'app-node2',
  templateUrl: './node2.component.html',
  styleUrls: ['./node2.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class Node2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}

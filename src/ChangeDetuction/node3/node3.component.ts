import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node4Component } from '../node4/node4.component';

@Component({
  selector: 'app-node3',
  templateUrl: './node3.component.html',
  styleUrls: ['./node3.component.css'],
  standalone: true,
  imports: [CommonModule,Node4Component],
})
export class Node3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}

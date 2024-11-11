import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node1Component } from '../node1/node1.component';
import { Node3Component } from '../node3/node3.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule,Node1Component,Node3Component],
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

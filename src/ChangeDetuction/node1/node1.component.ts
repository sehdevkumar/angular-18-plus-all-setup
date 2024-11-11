import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node2Component } from '../node2/node2.component';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-node1',
  templateUrl: './node1.component.html',
  styleUrls: ['./node1.component.css'],
  standalone:true,
  imports: [CommonModule,Node2Component]
})
export class Node1Component implements OnInit {

  constructor() { }

  counter$:number = 0;

  ngOnInit() {
    interval(500).pipe(map(d=> d*10)).subscribe(d=> {
       this.counter$ = d;
    })
  }

}

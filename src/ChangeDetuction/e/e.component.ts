import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FComponent } from '../f/f.component';
import { GComponent } from '../g/g.component';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css'],
  standalone:true,
  imports:[CommonModule,FComponent,GComponent]
})
export class EComponent{

  constructor() { }


  ngDoCheck(): void {
    console.log("I shoould run")
    
  }



}

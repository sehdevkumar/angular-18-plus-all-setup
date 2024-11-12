import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 

}

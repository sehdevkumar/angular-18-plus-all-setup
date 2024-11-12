import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class DComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

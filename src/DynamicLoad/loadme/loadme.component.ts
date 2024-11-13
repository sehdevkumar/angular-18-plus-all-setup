import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadme',
  templateUrl: './loadme.component.html',
  styleUrls: ['./loadme.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LoadmeComponent implements OnInit {
  @Input() data!:string;
  constructor() {}

  ngOnInit() {}
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule,AComponent]
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

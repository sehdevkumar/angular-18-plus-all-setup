import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BComponent } from '../b/b.component';
import { EComponent } from '../e/e.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  standalone: true,
  imports: [CommonModule,BComponent,EComponent]
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

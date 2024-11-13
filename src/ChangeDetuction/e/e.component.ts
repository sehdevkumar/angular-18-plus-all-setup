import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FComponent } from '../f/f.component';
import { GComponent } from '../g/g.component';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css'],
  standalone: true,
  imports: [CommonModule, FComponent, GComponent],
})
export class EComponent {
  constructor() {}

  flipColor = false;
  cdRef = inject(ChangeDetectorRef);

  ngOnInit() {
    setInterval(() => {
      this.flipColor = !this.flipColor;
      this.cdRef.detectChanges();
    }, 1000);
  }
}

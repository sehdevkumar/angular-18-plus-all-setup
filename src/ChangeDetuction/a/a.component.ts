import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BComponent } from '../b/b.component';
import { EComponent } from '../e/e.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  standalone: true,
  imports: [CommonModule, BComponent, EComponent],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {
  constructor() {}

  flipColor = false;
  cdRef = inject(ChangeDetectorRef);

  ngOnInit() {
    setInterval(() => {
      this.flipColor = !this.flipColor;
      // this.cdRef.detectChanges();
    }, 1000);
  }
}

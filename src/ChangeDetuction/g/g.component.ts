import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrls: ['./g.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class GComponent implements OnInit {
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

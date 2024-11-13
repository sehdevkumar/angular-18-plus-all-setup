import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DComponent implements OnInit {
  constructor() {}

  flipColor = false;
  cdRef = inject(ChangeDetectorRef);

  ngOnInit() {
    setInterval(() => {
      this.flipColor = !this.flipColor;
    }, 1000);
  }
}

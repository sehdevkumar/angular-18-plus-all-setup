import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Node1Component } from '../node1/node1.component';
import { Node3Component } from '../node3/node3.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, Node1Component, Node3Component, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RootComponent implements OnInit {
  constructor() {}

  isOnPushOn = signal<boolean>(false);

  cdRef = inject(ChangeDetectorRef);

  toggleChangeDetection = signal<boolean>(true);

  ngOnInit() {
    this.isOnPushOn.set((this as any).__proto__.constructor.ɵcmp.onPush);
  }

  onClickToggle() {
    this.toggleChangeDetection.set(!this.toggleChangeDetection());
    if (this.toggleChangeDetection()) {
      this.cdRef.reattach();
    } else {
      this.cdRef.detach();
    }
  }
}

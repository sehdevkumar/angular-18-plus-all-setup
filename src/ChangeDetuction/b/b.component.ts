import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CComponent } from '../c/c.component';
import { DComponent } from '../d/d.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  standalone:true,
  imports: [CommonModule,CComponent,DComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}



import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.css'],
  standalone:true,
  imports: [CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FComponent implements OnInit {

  constructor() { }
    
  flipColor = false;
  cdRef =inject(ChangeDetectorRef)


  ngOnInit() {
    
    setInterval(()=> {
        this.flipColor = !this.flipColor;     
        this.cdRef.detectChanges()  
    },1000)

  }

}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoadmeComponent } from './loadme/loadme.component';

@Component({
  selector: 'app-DynamicLoad',
  templateUrl: './DynamicLoad.component.html',
  styleUrls: ['./DynamicLoad.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DynamicLoadComponent implements OnInit, AfterViewInit {
  @ViewChild('injectComponentRef', { read: ViewContainerRef })
  injectComponentRef!: ViewContainerRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Create and inject LoadmeComponent dynamically
   const componentRef =  this.injectComponentRef.createComponent(LoadmeComponent);

    // Pass data to the @Input property of LoadmeComponent
    componentRef.instance.data = 'Hello from DynamicLoadComponent';

    // You may need to detect changes to update the view
    componentRef.changeDetectorRef.detectChanges();
  }
}

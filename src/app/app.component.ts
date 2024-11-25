import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from "@angular/material/select"
import { DynamicComponent } from '../PracticeCode/DynamicComponentWithViewContainerRef';
import { DynamicComponentDirective } from '../PracticeCode/DynamicComponentWithDirective';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule, DynamicComponent,DynamicComponentDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-plus-all-in-setup';
}
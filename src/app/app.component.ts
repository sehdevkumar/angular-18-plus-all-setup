import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from "@angular/material/select"
import { DynamicComponent } from '../PracticeCode/DynamicComponents/DynamicComponentWithViewContainerRef';
import { DynamicComponentDirective } from '../PracticeCode/DynamicComponents/DynamicComponentWithDirective';
import { AllDirectiveComponents } from '../PracticeCode/Directives/AllDirectives';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule, DynamicComponent,DynamicComponentDirective,AllDirectiveComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-plus-all-in-setup';
}
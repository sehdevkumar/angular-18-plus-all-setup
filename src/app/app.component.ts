import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from "@angular/material/select"
import { DynamicComponent } from '../PracticeCode/DynamicComponents/DynamicComponentWithViewContainerRef';
import { DynamicComponentDirective } from '../PracticeCode/DynamicComponents/DynamicComponentWithDirective';
import { AllDirectiveComponents } from '../PracticeCode/Directives/AllDirectives';
import { AllReactiveForm } from "../PracticeCode/ReactiveForms/AllReactiveForm";
import { AllRxjsComponent } from "../PracticeCode/Rxjs/AllRxjs";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule, DynamicComponent, DynamicComponentDirective, AllDirectiveComponents, AllReactiveForm, AllRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-plus-all-in-setup';
}
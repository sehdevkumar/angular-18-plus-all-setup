import { Component } from "@angular/core";
import { ObservableSubjectComponent } from "./ObservableSubjects";
import { RxjsOperatorsComponent } from "./Operators";

@Component({
  selector: 'all-rxjs-component',
  template : `
      
      <!-- <observable-subjects-component></observable-subjects-component> -->
       <rxjs-operators-component></rxjs-operators-component>
   
  `,
  standalone: true,
  imports: [ObservableSubjectComponent, RxjsOperatorsComponent]

})
export class AllRxjsComponent {}
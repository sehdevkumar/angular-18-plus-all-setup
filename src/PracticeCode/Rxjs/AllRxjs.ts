import { Component } from "@angular/core";
import { ObservableSubjectComponent } from "./ObservableSubjects";

@Component({
  selector: 'all-rxjs-component',
  template : `
      
      <observable-subjects-component></observable-subjects-component>
   
  `,
  standalone: true,
  imports: [ObservableSubjectComponent]

})
export class AllRxjsComponent {}
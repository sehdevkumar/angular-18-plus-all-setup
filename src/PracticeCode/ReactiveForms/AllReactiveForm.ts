import { Component } from "@angular/core";
import { NestedFormFeature } from "./NestedFormFeature";

@Component  ({
    selector: 'app-allReactiveForm',
    template:  `
      
      <app-nested-form-feature></app-nested-form-feature>


    `,
    standalone:true,
    imports: [NestedFormFeature]
})
export class AllReactiveForm {}
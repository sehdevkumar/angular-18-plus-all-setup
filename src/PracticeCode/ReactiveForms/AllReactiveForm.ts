import { Component } from "@angular/core";
import { NestedFormFeature } from "./NestedFormFeature";
import { FormCustomValidators } from "./FormCustomValidators";

@Component  ({
    selector: 'app-allReactiveForm',
    template:  `
      
      <app-nested-form-feature></app-nested-form-feature>
      <form-custom-validator></form-custom-validator>


    `,
    standalone:true,
    imports: [NestedFormFeature, FormCustomValidators]
})
export class AllReactiveForm {}
import { Component } from "@angular/core";
import { AttrDirectiveComponent } from "./AttributeDirective";
import { StrDirectiveComponent } from "./StructuralDirective";
import { ComponentDirectiveComponent } from "./ComponentDirective";
import { CustomDirectiveComponent } from "./CustomDIrective";

@Component({
    selector: 'all-directive',
    standalone:true,
    template:`
       
       <attr-directive-component></attr-directive-component>
       <str-directive-component></str-directive-component>
       <component-directive></component-directive>
       <custom-directive-component></custom-directive-component>
    `,
    imports: [AttrDirectiveComponent, StrDirectiveComponent, ComponentDirectiveComponent, CustomDirectiveComponent]
})

export class AllDirectiveComponents {}
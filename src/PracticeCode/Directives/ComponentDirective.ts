import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

/**
 * 
 * A component directive is a directive that is a component.
 * It is a self-contained piece of code that represents a UI component.
 * It is used to create a reusable piece of UI that can be used in multiple places.
 *
 * Example:
 *  <component-directive></component-directive>
 * 
 * 
 */
@Component({
    selector: 'component-directive',
    template: `<h1>Component Directive</h1>`,
    styles: [`
        h1 {
            color: red;
        }
    `],
    standalone: true,
    imports: [CommonModule]
})
export class ComponentDirectiveComponent {}
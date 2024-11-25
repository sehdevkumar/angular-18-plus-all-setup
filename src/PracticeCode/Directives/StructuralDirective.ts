/**
 * This is an Angular Structural Directive.
 * 
 * Structural Directives are used to add or remove DOM elements.
 * They are not used for creating new elements or components, but instead for modifying existing ones.
 * 
 * In this case, the directive is applied to an element and it adds a new element to the DOM.
 * The directive is applied to a ul element and it adds a new list item to the list.
 * 
 * The directive uses the ngTemplateOutlet and ngTemplateOutletContext directives to add the new element to the DOM.
 * The ngTemplateOutlet directive is used to render a template and the ngTemplateOutletContext directive is used to pass data to the template.
 * 
 * The directive is a standalone component because it imports CommonModule which provides the ngTemplateOutlet and ngTemplateOutletContext directives.
 * 
 * The directive is used in the template of a component by applying the directive to an element.
 * For example, if a component has the following template:
 * 
 * <ul str-directive-component>
 *     <li>Item 1</li>
 *     <li>Item 2</li>
 *     <li>Item 3</li>
 * </ul>
 * 
 * The directive will be applied to the ul element and a new list item will be added to the list.
 * 
 * The directive is a good example of how to use Structural Directives in Angular.
 * 
 * Other examples of structural directives include ngIf, ngFor, ngSwitch, etc.
 * For example, you can use ngFor to repeat a template for each item in an array, or ngIf to conditionally render a template.
 * You can also use ngSwitch to conditionally render one of multiple templates.
 */

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'str-directive-component',
    standalone: true,
    template: `
        <ul class="list-disc">
            @for (item of [1, 2, 3, 4]; track $index) { 
                <ng-container *ngTemplateOutlet="listItemTemplate; context: { $implicit: item }"></ng-container>
            }
        </ul>
        <ng-template #listItemTemplate let-item>
            <li class="text-3xl">{{ item }}</li>
        </ng-template>
       
    `,
    imports: [CommonModule]
})

export class StrDirectiveComponent {
     
}

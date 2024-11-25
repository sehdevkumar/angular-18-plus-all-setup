import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

/**
 * This is an Angular Attribute Directive.
 * 
 * Attribute Directives are used to alter the appearance or behavior of an element.
 * They are not used for creating new elements or components, but instead for modifying existing ones.
 * 
 * In this case, the directive is applied to an element and it modifies the appearance of that element.
 * The directive is applied to an h1 element and it adds a red color to the text of that element.
 * 
 * The directive uses the ngClass and ngStyle directives to add the class and style to the element.
 * The ngClass directive adds the class 'text-5xl' to the element, which increases the font size of the text.
 * The ngStyle directive adds the style {'color': 'red'} to the element, which changes the color of the text to red.
 * 
 * The directive is a standalone component because it imports CommonModule which provides the ngClass and ngStyle directives.
 * 
 * The directive is used in the template of a component by applying the directive to an element.
 * For example, if a component has the following template:
 * 
 * <h1 attr-directive-component>I am not happy but I am not sad</h1>
 * 
 * The directive will be applied to the h1 element and the text will be red and have a large font size.
 * 
 * The directive is a good example of how to use Attribute Directives in Angular.
 */

@Component({
    selector: 'attr-directive-component',
    standalone: true,
    template:  `<h1 [ngClass]="'text-5xl'" [ngStyle]="{'color': 'red'}">I am not happy but I am not sad</h1>`,
    imports: [CommonModule]
})

export class AttrDirectiveComponent {
     
}

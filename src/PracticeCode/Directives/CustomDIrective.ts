import { CommonModule } from "@angular/common";
import { Component, Directive, ElementRef, inject, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[customdirective]',
    standalone: true,
    host: {
        '(click)': 'handleClick($event)',
        '(mouseover)': 'handleClick($event)'
    },
    inputs: ['title', 'defaultColor'],

})
export class CustomDirective {

    renderer = inject(Renderer2);
    @Input() title: string = 'This is me';
    @Input() defaultColor: string = '';
    constructor(private element: ElementRef<any>) {
      
    }
   
    handleClick(event: Event) {
        console.log("%cHacked","font-size:100px;color:red",this.defaultColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.defaultColor);
    }
}



@Component({
    selector: 'custom-directive-component',
    standalone: true,
    template: `
        <h1 class="text-2xl">This is an Custom Directive</h1>
        <div customdirective  defaultColor="blue" title="Custom Directive">Someting has to add right</div>
        `,
   imports: [CommonModule,CustomDirective],
})
export class CustomDirectiveComponent { }


import { Component, ViewEncapsulation } from "@angular/core";



@Component({
    selector: "app-encapsulation-a",
    template: `
        <div class="shadow-lg bg-white rounded-lg p-4 global-cls">
            Hi A
        </div>
    `,
    standalone: true,
    encapsulation: ViewEncapsulation.Emulated,
    styles: [
        `        
            :host {
                width: 300px;
            }
            // .global-cls {
            //     background-color: blue;
            // }
        `
    ]
})
export class EncapsulationAComponent { }


@Component({
    selector: "app-encapsulation-b",
    template: `
        <div class="shadow-lg bg-white rounded-lg p-4 global-cls">
            Hi B
        </div>
    `,
    standalone: true,
    encapsulation: ViewEncapsulation.Emulated,
    styles: [
        `        
            :host {
                width: 300px;
            }

            .global-cls {
                background-color: green;
            }
        `
    ]
})

export class EncapsulationBComponent { }



@Component({
    selector: "app-encapsulations",
    imports: [EncapsulationAComponent, EncapsulationBComponent],
    standalone: true,
    template: `
                        <div class="h-full w-full flex flex-row justify-center global-cls gap-4 p-4">
                            <app-encapsulation-a></app-encapsulation-a>
                            <app-encapsulation-b></app-encapsulation-b>
                        </div>
                    `,
    styles: [
        `        

       
                            
                        `
    ]
})
export class EncapsulationsComponent { }

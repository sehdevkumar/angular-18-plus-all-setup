import { Component } from "@angular/core";



@Component({
    selector: "app-encapsulation-a",
    template: `
        <div class="container">
        </div>
    `,
    standalone: true,
    styles: [
        `        
            .container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }
        `
    ]
})
export class EncapsulationAComponent { }


@Component({
    selector: "app-encapsulation-b",
    template: `
        <div class="container">
        </div>
    `,
    standalone: true,
    styles: [
        `        
            .container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
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
                        <div class="container">
                            <app-encapsulation-a></app-encapsulation-a>
                            <app-encapsulation-b></app-encapsulation-b>
                        </div>
                    `,
    styles: [
        `        
                            .container {
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                            }
                        `
    ]
})
export class EncapsulationsComponent { }


import { Component, Pipe } from "@angular/core";

@Pipe({
    name:'transformString',
    standalone:true
})

export class TransformStringPipe{ 
    transform(value:string){
        return value.toUpperCase();
    }
}




@Component({
    standalone:true,
    template:`
    <h1>{{'hello' | transformString}}</h1>
    `,
    imports: [TransformStringPipe]
})
export class TransformStringComponent{}

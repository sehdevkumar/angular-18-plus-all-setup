import { Component, Pipe } from "@angular/core";

@Pipe({
    name:'transformString',
    standalone:true
})

export class TransformStringPipe{ 
    transform(value:string){
        return value.toUpperCase().padEnd(10,".");
    }
}




@Component({
    selector: 'app-transform-string',
    standalone: true,
    template: `
    <div class="bg-white rounded-lg shadow-lg p-4 flex-col  flex w-full h-full items-center justify-center">
        <p class="text-3xl font-bold animate-bounce">Pipe works!</p>
        <h1 class="text-4xl font-bold animate-pulse text-green-600 text-clip clear-right">{{ 'hello' | transformString }}</h1>
    </div>
    `,
    imports: [TransformStringPipe]
})
export class TransformStringComponent{}

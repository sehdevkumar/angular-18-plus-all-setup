import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'comp1',
  standalone: true,
  template: `<h1>Component 1</h1>`,
})
export class Component1 {
   constructor(private router: Router){
   }    
}

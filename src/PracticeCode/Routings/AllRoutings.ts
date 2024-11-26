import { Component, Provider } from "@angular/core";
import { Router, RouterModule } from "@angular/router";






@Component( {
     selector: 'all-routes-component',
     template:`
     <h1>All Routings</h1>
     <router-outlet></router-outlet>`,
     standalone: true,
     imports: [RouterModule],
})
export class AllRoutesComponent {
     constructor(private router: Router){
          console.log(this.router,"i should be called second");
     }              

}
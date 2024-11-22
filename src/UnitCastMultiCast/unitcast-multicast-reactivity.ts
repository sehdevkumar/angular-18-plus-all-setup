import { AsyncPipe } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

@Component({
  selector: "app-unitcast-multicast-reactivity",
  template: `


    <div class="bg-white rounded-lg shadow-md p-6">
      <h1 class="text-4xl font-semibold leading-tight text-blue-600 mb-4">
        UnitCast vs MultiCast
      </h1>
      <p class="mt-2 text-lg font-normal text-gray-700 mb-8 text-justify animate-pulse">
        In RxJs, there are two types of observables: Unicast Observables and
        Multicast Observables. Unicast Observables are observables that create a
        new execution for each subscribed observer. Multicast Observables are
        observables that share the same execution between multiple observers.
      </p>

      <div class="grid grid-cols-2 gap-8">
        <div class="bg-gray-100 p-4 rounded-lg">
          <h1 class="text-3xl font-semibold leading-tight text-blue-600 mb-4">
            Unicast Observable
          </h1>
          <ul class="list-disc pl-4">
            <li>{{ oberable$ | async }}</li>
            <li>{{ oberable$ | async }}</li>
            <li>{{ oberable$ | async }}</li>
          </ul>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <h1 class="text-3xl font-semibold leading-tight text-blue-600 mb-4">
            Multicast Observable
          </h1>
          <ul class="list-disc pl-4">
            <li>{{ subject$ | async }}</li>
            <li>{{ subject$ | async }}</li>
            <li>{{ subject$ | async }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [AsyncPipe],
})
export class UnitCastMultiCastReactivityComponent implements AfterViewInit {
  oberable$ = new Observable((observer) => {
    observer.next(Math.random());
  });
  
  
  subject$ = new AsyncSubject();
  
  
  
  ngAfterViewInit() {
    this.subject$.next(Math.random());
  
    new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      }).then(() => {
        this.subject$.complete();  
    });
     
  }
}
import { Observable, Subject } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'observable-subjects-component',
  standalone: true,
  template: `
    <div
      class="w-full h-full grid bg-gradient-to-br from-purple-700 to-purple-900 text-white p-6"
    >
      <h1 class="text-3xl font-bold text-center mb-6">
        Observable vs Subject Demo
      </h1>

      <!-- Unicast Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-center underline mb-4">
          Unicast (Observable)
        </h2>
        <div
          class="grid grid-cols-3 gap-4 text-center p-4 bg-purple-600 rounded-lg shadow-lg"
        >
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ observableStream$ | async }}
          </div>
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ observableStream$ | async }}
          </div>
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ observableStream$ | async }}
          </div>
        </div>
      </section>

      <!-- Divider -->
      <hr class="border-dashed border-purple-300 my-6" />

      <!-- Multicast Section -->
      <section>
        <h2 class="text-2xl font-semibold text-center underline mb-4">
          Multicast (Subject)
        </h2>
        <div
          class="grid grid-cols-3 gap-4 text-center p-4 bg-purple-600 rounded-lg shadow-lg"
        >
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ subjectStream$ | async }}
          </div>
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ subjectStream$ | async }}
          </div>
          <div class="border border-purple-400 p-4 rounded-lg shadow-inner">
            {{ subjectStream$ | async }}
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [CommonModule],
})
export class ObservableSubjectComponent {
  // Unicast Observable: Each subscriber gets its own random value
  observableStream$ = new Observable<number>((observer) => {
    observer.next(Math.random());
    observer.complete();
  });

  // Multicast Subject: All subscribers share the same random value
  subjectStream$ = new Subject<number>();

  constructor() {
    // Emit a single random value after a brief delay
    setTimeout(() => {
      this.subjectStream$.next(Math.random());
    }, 1000); // Delay for better visualization
  }
}

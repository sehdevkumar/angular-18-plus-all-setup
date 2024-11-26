import { Component } from '@angular/core';
import {
  of,
  from,
  fromEvent,
  interval,
  iif,
  concat,
  concatMap,
  merge,
  mergeMap,
  switchMap,
  exhaustMap,
  combineLatest,
  race,
  zip,
  skip,
  skipLast,
  take,
  takeLast,
  map,
  tap,
  takeWhile,
  takeUntil,
  delay,
  filter,
  forkJoin,
  Subject,
  timer,
  mapTo,
} from 'rxjs';

/**
 * Demonstrates various RxJS operators.
 *
 * @export
 * @class RxjsOperatorsComponent
 */
@Component({
  selector: 'rxjs-operators-component',
  template: `
    <div
      class="w-full h-full grid bg-gradient-to-br from-purple-700 to-purple-900 text-white p-6"
    >
      <h1 class="text-3xl font-bold text-center mb-6">RxJS Operators Demo</h1>
    </div>
  `,
  standalone: true,
})
export class RxjsOperatorsComponent {
  /**
   * Operator 1: `of` - Emits the provided arguments as a sequence.
   */
  demoOfOperator() {
    const observable = of(1, 2, 3);
    observable.subscribe((value) => console.log('of:', value));
  }

  /**
   * Operator 2: `from` - Converts an array, promise, or iterable into an observable.
   */
  demoFromOperator() {
    const arrayObservable = from([10, 20, 30]);
    arrayObservable.subscribe((value) => console.log('from:', value));
  }

  /**
   * Operator 3: `fromEvent` - Creates an observable from DOM events.
   */
  demoFromEventOperator() {
    const clickObservable = fromEvent(document, 'click');
    clickObservable.subscribe((event) => console.log('fromEvent:', event));
  }

  /**
   * Operator 4: `interval` - Emits values at specified intervals.
   */
  demoIntervalOperator() {
    const intervalObservable = interval(1000); // Emits values every 1 second
    intervalObservable.subscribe((value) => console.log('interval:', value));
  }

  /**
   * Operator 5: `iif` - Emits one of two observables based on a condition.
   */
  demoIifOperator() {
    const observable = iif(
      () => Math.random() > 0.5,
      of('Condition is true'),
      of('Condition is false')
    );
    observable.subscribe((value) => console.log('iif:', value));
  }

  /**
   * Operator 6: `concat`/`concatMap` - Sequentially emits values from multiple observables.
   */
  demoConcatOperator() {
    const obs1 = of(1, 2, 3);
    const obs2 = of(4, 5, 6);
    concat(obs1, obs2).subscribe((value) => console.log('concat:', value));
  }

  /**
   * Operator 7: `merge`/`mergeMap` - Concurrently emits values from multiple observables.
   */
  demoMergeOperator() {
    const obs1 = interval(1000).pipe(take(3)); // Emits 0, 1, 2
    const obs2 = interval(500).pipe(take(3)); // Emits 0, 1, 2 faster
    merge(obs1, obs2).subscribe((value) => console.log('merge:', value));
  }

  /**
   * Operator 8: `switchMap` - Switches to a new observable, canceling the previous one.
   */
  demoSwitchMapOperator() {
   const promise = (number:number) => {
     return new Promise((resolve, reject) => {
        console.log(number)
       setTimeout(() => {
         resolve(number);
       }, 1500);
     });
   };

   // Observable for click events
   const clickObservable = fromEvent(document, 'click');

   // Handling clicks with `switchMap`
   clickObservable
     .pipe(
       switchMap(() => from(promise(Math.ceil(Math.random()*100)))),
     )
     .subscribe(console.log);
  }

  /**
   * Operator 9: `exhaustMap` - Ignores new emissions while the current observable is active.
   */
  demoExhaustMapOperator() {
    const clickObservable = fromEvent(document, 'click');
    clickObservable
      .pipe(exhaustMap(() => of(1).pipe(delay(2000))))
      .subscribe((value) => console.log('exhaustMap:', value));
  }

  /**
   * Operator 10: `combineLatest` - Combines the latest values from multiple observables.
   */
  demoCombineLatestOperator() {
    const obs1 = interval(1000).pipe(take(3));
    const obs2 = interval(1500).pipe(take(4));
    combineLatest([obs1, obs2]).subscribe((values) =>
      console.log('combineLatest:', values)
    );
  }

  /**
   * Operator 11: `race` - Emits from the first observable to emit a value.
   */
  demoRaceOperator() {
    const example = race(
      // Emit every 1.5 seconds
      interval(1500).pipe(mapTo('1.5s won!')),
      // Emit every 1 second
      interval(1500).pipe(mapTo('1s won!')),
      // Emit every 2 seconds
      interval(2000).pipe(mapTo('2s won!')),
      // Emit every 2.5 seconds
      interval(2500).pipe(mapTo('2.5s won!'))
    );

    // Subscribe to the race and log the winner
    const subscription = example.subscribe((val) =>
      console.log('Race Winner:', val)
    );

    // Unsubscribe after 10 seconds to avoid memory leaks
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed from race.');
    }, 10000);
  }

  /**
   * Operator 12: `zip` - Combines values from multiple observables based on their index.
   */
  demoZipOperator() {
    const obs1 = new Subject();
    const obs2 = new Subject();
    zip(obs1, obs2).subscribe((values) => console.log('zip:', values));

    obs1.next(1);
    obs2.next('A');
    obs2.next(2);
    obs1.next('B');
  }

  /**
   * Operator 13: `skip`, `skipLast` - Skips a specified number of values.
   */
  demoSkipOperator() {
    const observable = of(1, 2, 3, 4, 5).pipe(skip(2));
    observable.subscribe((value) => console.log('skip:', value));
  }

  /**
   * Operator 14: `take`, `takeLast` - Takes a specified number of values.
   */
  demoTakeOperator() {
    const observable = of(1, 2, 3, 4, 5).pipe(take(3));
    observable.subscribe((value) => console.log('take:', value));
  }

  /**
   * Operator 15: `map` - Transforms emitted values.
   */
  demoMapOperator() {
    const observable = of(1, 2, 3).pipe(map((x) => x * 10));
    observable.subscribe((value) => console.log('map:', value));
  }

  /**
   * Operator 16: `tap` - Performs side effects without altering the values.
   */
  demoTapOperator() {
    const observable = of(1, 2, 3).pipe(
      tap((x) => console.log('Side effect:', x))
    );
    observable.subscribe((value) => console.log('tap:', value));
  }

  /**
   * Operator 17: `takeWhile` - Takes values while a condition is true.
   */
  demoTakeWhileOperator() {
    const observable = of(1, 2, 3, 4, 5).pipe(takeWhile((x) => x < 4));
    observable.subscribe((value) => console.log('takeWhile:', value));
  }

  /**
   * Operator 18: `takeUntil` - Emits values until another observable emits.
   */
  demoTakeUntilOperator() {
    const stop$ = timer(3000);
    const observable = interval(1000).pipe(takeUntil(stop$));
    observable.subscribe((value) => console.log('takeUntil:', value));
  }

  /**
   * Operator 19: `delay` - Delays the emission of values.
   */
  demoDelayOperator() {
    const observable = of('Delayed Value').pipe(delay(2000));
    observable.subscribe((value) => console.log('delay:', value));
  }

  /**
   * Operator 20: `filter` - Filters values based on a predicate.
   */
  demoFilterOperator() {
    const observable = of(1, 2, 3, 4, 5).pipe(filter((x) => x % 2 === 0));
    observable.subscribe((value) => console.log('filter:', value));
  }

  /**
   * Operator 21: `forkJoin` - Combines the final emitted values from multiple observables.
   */
  demoForkJoinOperator() {
    const obs1 = of(1, 2, 3, 4);
    const obs2 = of('A', 'B', 'C');
    forkJoin([obs1, obs2]).subscribe((values) =>
      console.log('forkJoin:', values)
    );
  }

  constructor() {
    // this.demoForkJoinOperator()
    // this.demoFilterOperator()
    // this.demoDelayOperator()
    // this.demoTakeUntilOperator()
    // this.demoTakeWhileOperator()
    // this.demoTapOperator()
    // this.demoMapOperator()
    // this.demoTakeOperator()
    // this.demoSkipOperator()
    // this.demoZipOperator()
    // this.demoRaceOperator()
    // this.demoCombineLatestOperator();
    // this.demoExhaustMapOperator();
    // this.demoSwitchMapOperator();
    // this.demoMergeOperator()
    // this.demoConcatOperator()
    this.demoIifOperator()
  }
}

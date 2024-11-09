import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  combineLatestAll,
  concat,
  forkJoin,
  fromEvent,
  interval,
  map,
  merge,
  of,
  range,
  Subject,
  take,
  zip,
} from 'rxjs';

/**
 * @fileoverview
 *  
 * These operators used to join the multiples stream together.
 * 1. combineLatest
   2. concat
   3. forkJoin
   4. merge
   5. partition
   6. race
   7. zip
 */

@Component({
  selector: 'app-join-opts',
  templateUrl: './join-opts.component.html',
  styleUrls: ['./join-opts.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class JoinOptsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.optCombineLatest()
    // this.optConcat()
    // this.optForkJoin()
    // this.optMerge()
    this.optZip();
  }

  /**
   * this operator combine the streams  and emit whenever any subject changes
   */
  optCombineLatest() {
    const subject1 = new Subject();
    const subject2 = new Subject();

    // Direct use
    combineLatest([subject1, subject2]).subscribe((d) => {
      console.log('combineLatest Direct Use', d);
    });

    subject1.next(1);
    subject2.next(2);
    subject2.next(3);

    console.log(
      '============================End of the CombineLatest Operator================================='
    );
  }

  /**
   * join the continue stream
   */
  optConcat() {
    const timer = interval(1000).pipe(take(4));
    const sequence = interval(1000).pipe(take(3));
    const result = concat(timer, sequence);
    result.subscribe(
      (x) => console.log(x),
      null,
      () => {
        console.log(
          '============================End of the concat Operator================================='
        );
      }
    );
  }

  /**
   * Wait till last of all observables emitted values , it should be continues streaming
   */
  optForkJoin() {
    const timer1 = interval(1000).pipe(take(14));
    const timer2 = interval(1000).pipe(take(3));

    forkJoin([timer1, timer2]).subscribe((d) => {
      console.log('Why I am using the forkJoin', d);
    });
    console.log(
      '============================End of the forkJoin Operator================================='
    );
  }

  optMerge() {
    const merge1 = new Subject();
    const merge2 = new Subject();

    merge(merge1, merge2).subscribe((d) => {
      console.log('merge ', d);
    });

    merge1.next(1);
    merge2.next(2);
  }

  optRace() {}

  optZip() {
    const zip1 = new Subject();
    const zip2 = new Subject();

    zip([zip1, zip2]).subscribe((d) => {
      console.log('zip ', d);
    });

    zip1.next(1);
    zip2.next(2);
    zip1.next(2);
    zip2.next(3);
    zip2.next(4);

  }
}

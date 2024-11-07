import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, combineLatestAll, fromEvent, interval, map, of, Subject, take } from 'rxjs';

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
   standalone:true,
   imports: [CommonModule]
})
export class JoinOptsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.optCombineLatest()
  }

  /**
   * this operator combine the streams  and emit whenever any subject changes
   */
  optCombineLatest() {
    const subject1 = new Subject();
    const subject2 = new Subject();
     
    // Direct use 
    combineLatest([subject1,subject2]).subscribe(d=> {
       console.log("combineLatest Direct Use",d)
    })


    console.log("============================End of the CombineLatest Operator=================================")



    subject1.next(1);
    subject2.next(2);
    subject2.next(3);
    

  }

  /**
   * join the subjects
   */
  optConcat() {

    
  }

  optForkJoin() {}

  optMerge() {}

  optRace() {}

  optZip() {}
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, combineLatestAll, concat, fromEvent, interval, map, of, Subject, take } from 'rxjs';

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
    this.optConcat()
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


    
    
    
    subject1.next(1);
    subject2.next(2);
    subject2.next(3);
    
    console.log("============================End of the CombineLatest Operator=================================")

  }

  /**
   * join the subjects
   */
  optConcat() {
      
    const subject1 = new Subject();
    const subject2 = new Subject();
    
    // Direct use
    concat(subject1, subject2).subscribe((d) => {
      console.log('concat', d);
    });
    
    subject1.next(1);
    subject2.next(2);
    subject2.next(3);
    
    console.log(
      '============================End of the concat Operator================================='
    );
  }

  optForkJoin() {}

  optMerge() {}

  optRace() {}

  optZip() {}
}

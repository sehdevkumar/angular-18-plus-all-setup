import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, interval, map, mergeMap, of, take, tap } from 'rxjs';

/**
 * @author sehdevkumar@atai.ai
 */
@Component({
  selector: 'app-transformation-opt',
  templateUrl: './transformation-opt.component.html',
  styleUrls: ['./transformation-opt.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class TransformationOptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.optMap()
    // this.optMergeMap()
    //  this.optConcatMap()
    this.optExhaustMap()
  }

  
  /**
   * Does not Maintained the Value sequences but flatten the streams
   */
  optMergeMap() {
    
     const stream1 = interval(100).pipe(take(5));
     const stream2 = (d: number)=>  of(`I a m was second ${d}`).pipe(delay(Math.random()*1000*d),map(d=> d))
     
     stream1.pipe(mergeMap(d=> stream2(d))).subscribe((d) => {
       console.log(d);
      });
      
    
  }

  optMap() {
     
    const stream1 = interval(1000).pipe(take(10));

    stream1.pipe(map(d=> d*10)).subscribe(d=> {
       console.log("count",d)
    })


  }

  /**
   * Wait till inner obervable completes
   */
  optExhaustMap() {
     
    
     const stream1 = interval(10).pipe(take(20));
     const stream2 = (d: number) =>
       of(`I a m was second ${d}`).pipe(delay(20000))

     stream1.pipe(exhaustMap((d) => stream2(d))).subscribe((d) => {
       console.log("I will run after everything done");
     });
      

  }

  /**
   * Maintained the Sequence in which value emitted
   */

  optConcatMap() {
      const stream1 = interval(1000).pipe(take(10));
      const stream2 = (d: number) =>
        of(`I a m was second ${d}`).pipe(delay(Math.random() * 1000 * d));

      stream1.pipe(concatMap((d) => stream2(d))).subscribe((d) => {
        console.log(d);
      });
  }


  optSwitchMap() {
     
  }


}

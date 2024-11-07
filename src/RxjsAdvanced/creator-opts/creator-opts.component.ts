import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent, iif, of } from 'rxjs';

/**
 * @fileoverview
 *  These Operators used to create the stream
 * 1. from
 * 2. of
 * 3. fromEvent
 * 4. iif
 * 5. interval
 */

@Component({
  selector: 'app-creator-opts',
  templateUrl: './creator-opts.component.html',
  styleUrls: ['./creator-opts.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CreatorOptsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.optFrom();
    this.optOf();
    this.optIIF();
    this.optInterval();
    this.optFromEvent();
  }

  optFrom() {
    from([1, 2, 4, 5]).subscribe((d) => {
      console.log(d, 'from');
    });
  }

  optOf() {
    of([1, 2, 4, 5], 1, 3, 4).subscribe((d) => {
      console.log(d, 'of');
    });
  }

  optFromEvent() {
    fromEvent<any>(document, 'click').subscribe((d) => {
      console.log(d, 'from event');
    });
  }

  optIIF() {
   iif(()=> false,of(1,2,3),from([3,2,1])).subscribe(d=> {
     console.log("iif",d)
   })
  }

  optInterval() {}
}

import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-HttpCall',
  templateUrl: './HttpCall.component.html',
  styleUrls: ['./HttpCall.component.css'],
  standalone:true
})
export class HttpCallComponent implements OnInit {

  httpService = inject(HttpClient);

  constructor() { }

  ngOnInit() {
   this.httpService.get('https://jsonplaceholder.typicode.com/todos/').subscribe(d=> {
     console.log(d,"logged")
   });
  }

}

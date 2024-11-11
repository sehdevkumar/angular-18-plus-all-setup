import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMessage } from '../Selectors';
import NgrxActions from '../Actions';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-consume-state',
  templateUrl: './consume-state.component.html',
  styleUrls: ['./consume-state.component.css'],
  standalone: true,
  imports: [CommonModule,MatButtonModule],
})
export class ConsumeStateComponent implements OnInit {
  store = inject(Store);
  message$!:Observable<string>;
  constructor() {}

  ngOnInit() {
   this.message$ =  this.store.select(selectMessage);
  }

  onClickSendMessage() {
    let randomNumber = Math.random()*1000
     this.store.dispatch(NgrxActions.sendMessage({message: "Random Message Send with" + randomNumber}));  
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  randomNumber = Math.random() * 1000;

  constructor() {}
}

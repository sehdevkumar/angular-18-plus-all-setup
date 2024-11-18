import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "platform",
})
export class FakeService {
  randomNumber = Math.random() * 1000;

  constructor() {}
}

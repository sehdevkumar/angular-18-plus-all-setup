import { Component, inject, OnInit } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-Injectors-Hierarchy',
  templateUrl: './Injectors-Hierarchy.component.html',
  styleUrls: ['./Injectors-Hierarchy.component.css'],
  standalone:true
})
export class InjectorsHierarchyComponent implements OnInit {


  constructor(private fakeService: FakeService) { }

  /**
   * Lifecycle hook, after properties have been initialized
   * Prints the value of the injected FakeService
   */
  ngOnInit(): void {
    if (this.fakeService) {
      console.log(this.fakeService, 'fake service injector');
    }  
  }

}




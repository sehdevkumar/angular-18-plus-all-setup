import { Component, inject, OnInit } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-Injectors-Hierarchy',
  templateUrl: './Injectors-Hierarchy.component.html',
  styleUrls: ['./Injectors-Hierarchy.component.css'],
  standalone:true
})
export class InjectorsHierarchyComponent implements OnInit {

   fake = inject(FakeService)

  constructor() { }

  ngOnInit() {
     console.log(this.fake,"fake service intector")
  }

}

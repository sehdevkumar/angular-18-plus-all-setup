import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from "@angular/material/select"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-plus-all-in-setup';
}




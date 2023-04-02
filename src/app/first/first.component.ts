import { Component } from '@angular/core';
import { IFirst } from '../first';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  first: IFirst = {
    firstComponent1: "Hello"
  }
}

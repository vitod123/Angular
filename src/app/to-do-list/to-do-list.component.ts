import { Component } from '@angular/core';
import { IT0_Do_list } from '../to-do-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  todolists: IT0_Do_list[];

  constructor()
  {
    this.todolists = [
      {name: "Hit the gym", date: "01.04.2023", isCheck: false},
      {name: "Pay bills", date: "", isCheck: true},
      {name: "Meet John", date: "", isCheck: true},
      {name: "Buy eggs", date: "29.03.2023", isCheck: false},
      {name: "Read a book", date: "", isCheck: true},
      {name: "Organize office", date: "", isCheck: true},
      {name: "Eat dinner", date: "", isCheck: true},
      {name: "Buy apples", date: "05.03.2023", isCheck: false},
      {name: "Meet George", date: "", isCheck: true},
      {name: "Feed the cat", date: "", isCheck: true},
      {name: "Wrile a letter", date: "", isCheck: true},
      {name: "Run 1 km", date: "15.01.2022", isCheck: false}
    ]
  }
}

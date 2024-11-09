import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './../../models/todo'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos:Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second tod',
        completed: false
      }
    ]
  }
}

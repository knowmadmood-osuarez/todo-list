import { Component, input, output } from '@angular/core';
import { TodoListItem } from '../todo-list-item/todo-list-item';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItem],
  templateUrl: './todo-list.html',
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  toggleDone     = output<string>();
  togglePriority = output<string>();
  delete         = output<string>();
}


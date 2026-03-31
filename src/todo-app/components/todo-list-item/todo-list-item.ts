import {Component, input, output} from '@angular/core';
import {Todo, TodoPriority} from '../../models/todo.model';

@Component({
    selector: 'app-todo-list-item',
    imports: [],
    templateUrl: './todo-list-item.html',
    styleUrl: './todo-list-item.css',
})
export class TodoListItem {
    todo = input.required<Todo>();
    checked = output<void>();
    togglePriority = output<void>();
    delete = output<void>();

    readonly TodoPriority = TodoPriority;
}



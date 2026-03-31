import {Component, input, output} from '@angular/core';
import {TodoFilter} from "../../models/todo.model";


@Component({
    selector: 'app-todo-filter',
    imports: [],
    templateUrl: './todo-filter.html',
})
export class TodoFilterComponent {
    current = input<TodoFilter>('all');
    filterChange = output<TodoFilter>();
}


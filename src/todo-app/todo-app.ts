import {Component, computed, inject, signal} from '@angular/core';
import {TodoForm} from './components/todo-form/todo-form';
import {TodoListComponent} from './components/todo-list/todo-list';
import {TodoService} from './services/todo.service';
import {TodoFilter, TodoPriority} from './models/todo.model';
import {TodoFilterComponent} from './components/todo-filter/todo-filter';

@Component({
    selector: 'app-todo-app',
    imports: [TodoForm, TodoListComponent, TodoFilterComponent],
    templateUrl: './todo-app.html',
    styleUrl: './todo-app.css',
})
export class TodoApp {
    private readonly todoService = inject(TodoService);
    readonly todos = this.todoService.todos;
    filter = signal<TodoFilter>('all');

    filteredTodos = computed(() => {
        const all = this.todos();
        const filter = this.filter();
        const filtered = filter === 'high' ? all.filter(t => t.priority === TodoPriority.High)
            : filter === 'low' ? all.filter(t => t.priority === TodoPriority.Low)
                : all;
        return [...filtered].sort((a, b) => {
            if (b.priority !== a.priority) return b.priority - a.priority;
            return a.createdAt.getTime() - b.createdAt.getTime();
        });
    });

    add(text: string) {
        this.todoService.add(text);
    }

    toggleDone(id: string) {
        const todo = this.todoService.getById(id);
        if (!todo) return;
        this.todoService.update(id, {done: !todo.done});
    }

    togglePriority(id: string) {
        const todo = this.todoService.getById(id);
        if (!todo) return;
        const priority = todo.priority === TodoPriority.High ? TodoPriority.Low : TodoPriority.High;
        this.todoService.update(id, {priority});
    }

    delete(id: string) {
        this.todoService.delete(id);
    }
}






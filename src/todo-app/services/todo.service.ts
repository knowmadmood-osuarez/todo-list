import {Injectable, signal} from '@angular/core';
import {Todo as TodoModel, TodoPriority} from '../models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private readonly _todos = signal<TodoModel[]>([]);
    public readonly todos = this._todos.asReadonly();

    getById(id: string): TodoModel | undefined {
        return this._todos().find((t) => t.id === id);
    }

    add(text: string, priority: TodoPriority = TodoPriority.Low): TodoModel {
        const id = (Math.random() * new Date().getTime()).toString();
        const todo: TodoModel = {id, text, done: false, priority, createdAt: new Date()};
        this._todos.update(list => [...list, todo]);
        return todo;
    }

    update(id: string, changes: Partial<Omit<TodoModel, 'id'>>): TodoModel {
        let updated: TodoModel | undefined;
        this._todos.update(list => list.map(t => {
            if (t.id !== id) return t;
            updated = {...t, ...changes};
            return updated;
        }));
        if (!updated) throw new Error(`Todo ${id} not found`);
        return updated;
    }

    delete(id: string): void {
        const exists = this._todos().some(t => t.id === id);
        if (!exists) throw new Error(`Todo ${id} not found`);
        this._todos.update(list => list.filter(t => t.id !== id));
    }
}

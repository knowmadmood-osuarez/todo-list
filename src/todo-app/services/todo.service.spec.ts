import {TestBed} from '@angular/core/testing';
import {TodoService} from './todo.service';
import {TodoPriority} from '../models/todo.model';

describe('TodoService', () => {
    let service: TodoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TodoService);
    });

    it('should start with an empty list', () => {
        expect(service.todos()).toEqual([]);
    });

    it('should add a todo to the list', () => {
        service.add('Comprar pan');
        expect(service.todos().length).toBe(1);
        expect(service.todos()[0].text).toBe('Comprar pan');
        expect(service.todos()[0].done).toBe(false);
    });

    it('should mark a todo as done', () => {
        const todo = service.add('Tarea');
        service.update(todo.id, {done: true});
        expect(service.todos()[0].done).toBe(true);
    });

    it('should change the priority of a todo', () => {
        const todo = service.add('Tarea');
        service.update(todo.id, {priority: TodoPriority.High});
        expect(service.todos()[0].priority).toBe(TodoPriority.High);
    });

    it('should remove a todo from the list', () => {
        const todo = service.add('Tarea');
        service.delete(todo.id);
        expect(service.todos()).toEqual([]);
    });

    it('should only update the targeted todo', () => {
        const a = service.add('A');
        service.add('B');
        service.update(a.id, {text: 'A actualizado'});
        expect(service.todos()[0].text).toBe('A actualizado');
        expect(service.todos()[1].text).toBe('B');
    });

    it('should throw when updating a non-existent todo', () => {
        expect(() => service.update('999', {text: 'X'})).toThrow();
    });

    it('should throw when deleting a non-existent todo', () => {
        expect(() => service.delete('999')).toThrow();
    });
});


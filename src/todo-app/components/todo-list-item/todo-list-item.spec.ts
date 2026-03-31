import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TodoListItem } from './todo-list-item';
import { getByTestId } from '../../../helpers/query.helpers';
import { TodoPriority } from '../../models/todo.model';

const mockTodo = { id: '1', text: 'Comprar pan', done: false, priority: TodoPriority.Low, createdAt: new Date() };

describe('TodoListItem', () => {
  let component: TodoListItem;
  let fixture: ComponentFixture<TodoListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TodoListItem] }).compileComponents();

    fixture = TestBed.createComponent(TodoListItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('todo', mockTodo);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleDone when checkbox changes', () => {
    const spy = vi.spyOn(component.checked, 'emit');
    getByTestId(fixture, 'item.checked').dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalled();
  });

  it('should emit togglePriority when priority button clicked', () => {
    const spy = vi.spyOn(component.togglePriority, 'emit');
    getByTestId(fixture, 'item.toggle-priority').click();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit delete when delete button clicked', () => {
    const spy = vi.spyOn(component.delete, 'emit');
    getByTestId(fixture, 'item.delete').click();
    expect(spy).toHaveBeenCalled();
  });
});



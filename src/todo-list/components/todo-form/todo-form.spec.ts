import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm } from './todo-form';
import {getByTestId} from "../../../helpers/query.helpers";

describe('TodoForm', () => {
  let component: TodoForm;
  let fixture: ComponentFixture<TodoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input correctly', () => {
    const input = getByTestId(fixture, 'todo-input');
    expect(input).toBeTruthy();
  })
});

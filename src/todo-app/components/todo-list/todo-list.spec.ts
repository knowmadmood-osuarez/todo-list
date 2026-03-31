import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListComponent} from './todo-list';
import {getAllByTestId, getByTestId} from '../../../helpers/query.helpers';
import {TodoPriority} from '../../models/todo.model';

const mockTodos = [
    {id: '1', text: 'Comprar pan', done: false, priority: TodoPriority.Low, createdAt: new Date()},
    {id: '2', text: 'Lavar ropa', done: false, priority: TodoPriority.High, createdAt: new Date()},
];

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({imports: [TodoListComponent]}).compileComponents();

        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('todos', mockTodos);
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render one item per todo', () => {
        expect(getAllByTestId(fixture, 'list.item').length).toBe(mockTodos.length);
    });

    it('should show empty state when no todos', () => {
        fixture.componentRef.setInput('todos', []);
        fixture.detectChanges();
        expect(getByTestId(fixture, 'list.empty')).toBeTruthy();
    });
});





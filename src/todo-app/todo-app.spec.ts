import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoApp} from './todo-app';

describe('TodoApp', () => {
    let component: TodoApp;
    let fixture: ComponentFixture<TodoApp>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({imports: [TodoApp]}).compileComponents();

        fixture = TestBed.createComponent(TodoApp);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add a todo', () => {
        component.add('Comprar pan');
        expect(component.todos().length).toBe(1);
        expect(component.todos()[0].text).toBe('Comprar pan');
    });

    it('should toggle done on a todo', () => {
        component.add('Comprar pan');
        const id = component.todos()[0].id;
        component.toggleDone(id);
        expect(component.todos()[0].done).toBe(true);
    });

    it('should delete a todo', () => {
        component.add('Comprar pan');
        const id = component.todos()[0].id;
        component.delete(id);
        expect(component.todos().length).toBe(0);
    });

    describe('ordering', () => {
        it('should place high priority todos before low priority', () => {
            component.add('Tarea baja');
            component.add('Tarea alta');
            component.togglePriority(component.todos()[1].id);

            const ordered = component.filteredTodos();
            expect(ordered[0].text).toBe('Tarea alta');
            expect(ordered[1].text).toBe('Tarea baja');
        });

        it('should order by createdAt within the same priority', () => {
            component.add('Primera');
            component.add('Segunda');

            const ordered = component.filteredTodos();
            expect(ordered[0].text).toBe('Primera');
            expect(ordered[1].text).toBe('Segunda');
        });
    });

    describe('filter', () => {
        beforeEach(() => {
            component.add('Baja');
            component.add('Alta');
            component.togglePriority(component.todos()[1].id);
        });

        it('should show only high priority todos', () => {
            component.filter.set('high');
            expect(component.filteredTodos().every(t => t.text === 'Alta')).toBe(true);
        });

        it('should show only low priority todos', () => {
            component.filter.set('low');
            expect(component.filteredTodos().every(t => t.text === 'Baja')).toBe(true);
        });
    });
});




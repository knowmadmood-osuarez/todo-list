import {ComponentFixture, TestBed} from '@angular/core/testing';
import {vi} from 'vitest';
import {TodoForm} from './todo-form';
import {getByTestId} from "../../../helpers/query.helpers";

describe('TodoForm', () => {
    let component: TodoForm;
    let fixture: ComponentFixture<TodoForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TodoForm]
        }).compileComponents();

        fixture = TestBed.createComponent(TodoForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be invalid with less than 3 characters', () => {
        component.textControl.setValue('ab');
        expect(component.textControl.valid).toBe(false);
    });

    it('should show required error when touched and empty', () => {
        component.textControl.markAsTouched();
        component.textControl.setValue('');
        fixture.detectChanges();
        expect(getByTestId(fixture, 'form.error.required')).toBeTruthy();
    });

    it('should show minlength error when touched and too short', () => {
        component.textControl.markAsTouched();
        component.textControl.setValue('ab');
        fixture.detectChanges();
        expect(getByTestId(fixture, 'form.error.minlength')).toBeTruthy();
    });

    it('should emit text and clear input on valid submit', () => {
        const spy = vi.spyOn(component.addTodo, 'emit');
        component.textControl.setValue('Comprar Pan');
        fixture.detectChanges();

        getByTestId(fixture, 'form.tag').dispatchEvent(new Event('submit'));
        fixture.detectChanges();

        expect(spy).toHaveBeenCalledWith('Comprar Pan');
        expect(component.textControl.value).toBe('');
    });

    it('should not emit on invalid submit', () => {
        const spy = vi.spyOn(component.addTodo, 'emit');
        component.textControl.setValue('ab');
        fixture.detectChanges();

        getByTestId(fixture, 'form.tag').dispatchEvent(new Event('submit'));
        fixture.detectChanges();

        expect(spy).not.toHaveBeenCalled();
    });
});





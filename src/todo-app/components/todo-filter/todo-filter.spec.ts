import {ComponentFixture, TestBed} from '@angular/core/testing';
import {vi} from 'vitest';
import {TodoFilterComponent} from './todo-filter';
import {getByTestId} from '../../../helpers/query.helpers';

describe('TodoFilterComponent', () => {
    let component: TodoFilterComponent;
    let fixture: ComponentFixture<TodoFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({imports: [TodoFilterComponent]}).compileComponents();

        fixture = TestBed.createComponent(TodoFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit "all" when Todas is clicked', () => {
        const spy = vi.spyOn(component.filterChange, 'emit');
        getByTestId(fixture, 'filter.all').click();
        expect(spy).toHaveBeenCalledWith('all');
    });

    it('should emit "high" when Alta prioridad is clicked', () => {
        const spy = vi.spyOn(component.filterChange, 'emit');
        getByTestId(fixture, 'filter.high').click();
        expect(spy).toHaveBeenCalledWith('high');
    });

    it('should emit "low" when Baja prioridad is clicked', () => {
        const spy = vi.spyOn(component.filterChange, 'emit');
        getByTestId(fixture, 'filter.low').click();
        expect(spy).toHaveBeenCalledWith('low');
    });
});


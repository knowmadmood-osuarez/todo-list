import {ComponentFixture} from '@angular/core/testing';

export function getByTestId<T>(
    fixture: ComponentFixture<T>,
    testId: string
): HTMLElement {
    const el = fixture.nativeElement.querySelector(`[data-testid="${testId}"]`);
    if (!el) throw new Error(`No se encontró ningún elemento con data-testid="${testId}"`);
    return el;
}

export function getAllByTestId<T>(
    fixture: ComponentFixture<T>,
    testId: string
): HTMLElement[] {
    return Array.from(fixture.nativeElement.querySelectorAll(`[data-testid="${testId}"]`));
}



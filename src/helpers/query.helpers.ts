import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/**
 * Retorna el elemento nativo del DOM por data-testid.
 */
export function getByTestId<T>(
    fixture: ComponentFixture<T>,
    testId: string
): HTMLElement {
    const el = fixture.nativeElement.querySelector(`[data-testid="${testId}"]`);
    if (!el) {
        throw new Error(`No se encontró ningún elemento con data-testid="${testId}"`);
    }
    return el;
}

/**
 * Retorna el DebugElement por data-testid (útil para inputs, eventos Angular).
 */
export function getDebugByTestId<T>(
    fixture: ComponentFixture<T>,
    testId: string
): DebugElement {
    const el = fixture.debugElement.query(By.css(`[data-testid="${testId}"]`));
    if (!el) {
        throw new Error(`No se encontró ningún DebugElement con data-testid="${testId}"`);
    }
    return el;
}

/**
 * Retorna todos los elementos que coincidan con el data-testid.
 */
export function getAllByTestId<T>(
    fixture: ComponentFixture<T>,
    testId: string
): HTMLElement[] {
    return Array.from(
        fixture.nativeElement.querySelectorAll(`[data-testid="${testId}"]`)
    );
}

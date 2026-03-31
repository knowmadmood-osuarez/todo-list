import {Component, output} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'app-todo-form',
    imports: [ReactiveFormsModule],
    templateUrl: './todo-form.html',
    styleUrl: './todo-form.css',
})
export class TodoForm {
    textControl = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
    });

    addTodo = output<string>();

    submit(event: SubmitEvent) {
        event.preventDefault();
        if (this.textControl.invalid) return;
        this.addTodo.emit(this.textControl.value);
        this.textControl.reset();
    }
}

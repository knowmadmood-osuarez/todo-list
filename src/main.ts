import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {TodoApp} from "./todo-app/todo-app";

@Component({
    selector: 'app-root',
    imports: [TodoApp],
    template: `
        <div class="w-full p-2 flex flex-col items-center">
            <h1 class="text-3xl font-bold underline mb-16">Code Challenge</h1>
            <app-todo-app></app-todo-app>
            <h2 class="text-sm mt-16">Oscar Suarez Payo</h2>
        </div>
    `,
})
export class App {
}

bootstrapApplication(App);

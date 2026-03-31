export interface Todo {
    id: string;
    text: string;
    done: boolean;
    priority: TodoPriority;
}

export enum TodoPriority {
    Low,
    High,
}
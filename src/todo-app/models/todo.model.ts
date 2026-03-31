export interface Todo {
    id: string;
    text: string;
    done: boolean;
    priority: TodoPriority;
    createdAt: Date;
}

export enum TodoPriority {
    Low,
    High,
}

export type TodoFilter = 'all' | 'high' | 'low';
import {TodoItemState} from '../todo/todos.interface';

export interface ViewModeButtonProps {
    todo: TodoItemState;
    enterEditMode: any;
    deleteTodo: any;
    htmlCommentLink: JSX.Element;
}
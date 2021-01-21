import {TodoItemState} from '../todo/todos.interface';

export interface EditModeButtonProps {
    todo: TodoItemState;
    saveChanges: any;
    exitEditMode: any;
    htmlCommentLink: JSX.Element;
}
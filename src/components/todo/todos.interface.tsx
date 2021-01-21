export interface TodoItemState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  comments: string[];
  createdBy: string;
  isEditing?: boolean;
  backup?: any;
}

export interface TodoItemsState {
  todos: TodoItemState[];
  term: string;
}

export interface TodoProps {
    todos:  TodoItemState[];
    toggleTodoCompleted?: (id: number) => void;
    deleteTodo?: (id: number) => void;
    enterEditMode?: (id: number) => void;
    exitEditMode?: (id: number) => void;
    saveChanges?: (id: number) => void;
    onTodoInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TodoItemProps {
    key: number;
    todo: TodoItemState;
    toggleTodoCompleted: any;
    deleteTodo: any;
    enterEditMode: any;
    exitEditMode: any;
    saveChanges: any;
    onTodoInputChange: any;
}

export interface AddTodoState {
    title: any;
    [key:string]: string;
}

export interface AddTodoProps {
    addTodo: (title: string) => void;
    todos:  TodoItemState[];
}

export interface SearchbarProps {
  search: (term: string) => void;
  todos:  TodoItemState[];
}
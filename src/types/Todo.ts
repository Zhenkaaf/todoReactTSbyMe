export interface ITodo {
  id: string;
  text: string;
  isChecked: boolean;
}
export interface ITodoListProps {
  todos: ITodo[];
  toogleCheckedState: (todoId: ITodo["id"]) => void;
  removeTodo: (todoId: ITodo["id"]) => void;
}
export interface INewTodoProps {
  createTodo: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    textRef: string
  ) => void;
}

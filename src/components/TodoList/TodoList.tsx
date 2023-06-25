import { ITodoListProps } from "../../types";

const TodoList = ({
  todos,
  toogleCheckedState,
  removeTodo,
}: ITodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => toogleCheckedState(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;

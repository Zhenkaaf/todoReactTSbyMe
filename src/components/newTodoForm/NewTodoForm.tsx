import { useRef } from "react";
import { INewTodoProps } from "../../types";

const NewTodoForm = ({ createTodo }: INewTodoProps) => {
  const textRef = useRef<HTMLInputElement>(null);

  const handleCreateTodo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (textRef.current) {
      createTodo(event, textRef.current.value);
      textRef.current.value = "";
    }
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Type in text"
        ref={textRef}
      />
      <button onClick={(event) => handleCreateTodo(event)}>Create todo</button>
    </form>
  );
};
export default NewTodoForm;

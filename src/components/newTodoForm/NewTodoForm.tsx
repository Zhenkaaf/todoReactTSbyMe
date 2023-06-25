interface INewTodoProps {
  text: string;
  createTodo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTodoForm = ({ createTodo, handleTextChange, text }: INewTodoProps) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Type in text"
        value={text}
        onChange={(event) => handleTextChange(event)}
      />
      <button onClick={(event) => createTodo(event)}>Create todo</button>
    </form>
  );
};
export default NewTodoForm;

import React, { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/newTodoForm/NewTodoForm";
import { ITodo } from "./types";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState<ITodo["text"]>("");

  const crateTodo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().toString(),
      text: text,
      isChecked: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const removeTodo = (todoId: ITodo["id"]) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  const toogleCheckedState = (todoId: ITodo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <div>
        <NewTodoForm
          createTodo={crateTodo}
          handleTextChange={handleTextChange}
          text={text}
        />
      </div>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toogleCheckedState={toogleCheckedState}
      />
    </div>
  );
}

export default App;

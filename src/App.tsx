import React, { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/newTodoForm/NewTodoForm";
import { ITodo } from "./types";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const crateTodo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    textRef: string
  ) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().toString(),
      text: textRef,
      isChecked: false,
    };
    setTodos([newTodo, ...todos]);
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
        <NewTodoForm createTodo={crateTodo} />
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

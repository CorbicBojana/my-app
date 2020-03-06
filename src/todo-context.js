import React, { useState } from "react";

const TodoContext = React.createContext({});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      todo: todo,
      id: Math.random() * 10
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    setTodo("");
    console.log(updatedTodos);
  };

  const handleClick = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{ handleChange, handleSubmit, handleClick, todos, todo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw Error("Out of context");
  }

  return context;
};

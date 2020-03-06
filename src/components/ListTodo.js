import React from "react";

import { useTodoContext } from "../todo-context";

function ListTodo() {
  const { handleClick, todos } = useTodoContext();

  const todosList = todos.map((todo, index) => (
    <h2 key={index}>{todo.todo}</h2>
  ));
  return (
    <div className="list-todo-items">
      {todosList}
      <button onClick={handleClick} className="button list-todo-button">
        Clear All
      </button>
    </div>
  );
}

export default ListTodo;

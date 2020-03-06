import React from "react";

import { useTodoContext } from "../todo-context";

function AddTodo() {
  const { handleChange, handleSubmit, todo } = useTodoContext();

  return (
    <>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          placeholder="Add Todo"
          value={todo}
          onChange={handleChange}
          className="add-todo-input"
        />
        <button type="submit" className="button add-todo-button">
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;

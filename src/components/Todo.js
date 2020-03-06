import React from "react";
import Intro from "./Intro";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

function Todo() {
  return (
    <div className="todo-app">
      <div className="container">
        <Intro />
        <AddTodo />
        <ListTodo />
      </div>
    </div>
  );
}

export default Todo;

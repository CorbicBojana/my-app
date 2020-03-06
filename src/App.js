import React from "react";

import "./app.css";

import Todo from "./components/Todo";

import { TodoProvider } from "./todo-context";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;

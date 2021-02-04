import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div style={{ textAlign: "center" }}>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

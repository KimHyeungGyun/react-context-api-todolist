import { useState } from "react";
import { TodoCtx, TodoContextState, Todo } from "./TodoStore";

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const id = Math.floor(Math.random() * 10000);

    const newTodo: Todo = {
      id,
      text,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const findIndex = todos.findIndex((todo) => todo.id === id);
    if (findIndex === -1) {
      throw new Error("todo not found");
    }

    todos.splice(findIndex, 1);
    setTodos([...todos]);
  };

  const toggleTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error("todo not found");
    }

    todo.isDone = !todo.isDone;
    setTodos([...todos]);
  };

  const ctx: TodoContextState = {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return <TodoCtx.Provider value={ctx}>{children}</TodoCtx.Provider>;
};

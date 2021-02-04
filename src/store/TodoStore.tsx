import { createContext, useContext } from "react";

export interface TodoContextState {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

export const TodoCtx = createContext<TodoContextState>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

export const useTodo = () => {
  return useContext(TodoCtx);
};

import React from "react";
import { useTodo } from "../store/TodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <>
      <h2>Todo</h2>
      <div>
        {todos.map(
          (todo, idx) => !todo.isDone && <TodoItem todo={todo} key={idx} />
        )}
      </div>

      <h2>Done</h2>
      <div>
        {todos.map(
          (todo, idx) => todo.isDone && <TodoItem todo={todo} key={idx} />
        )}
      </div>
    </>
  );
};

export default TodoList;

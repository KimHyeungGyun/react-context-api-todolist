import React from "react";
import { Todo, useTodo } from "../store/TodoStore";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { removeTodo, toggleTodo } = useTodo();

  const onRemove = () => {
    removeTodo(todo.id);
  };

  const onToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <button onClick={onToggle}>toggle</button>
      <button onClick={onRemove}>remove</button>
      {todo.text}
    </div>
  );
};

export default TodoItem;

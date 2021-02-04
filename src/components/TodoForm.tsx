import React, { useState } from "react";
import { useTodo } from "../store/TodoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default TodoForm;

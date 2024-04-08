import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const { value, setValue } = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      addTodo(value);
      
      setValue("");
  };
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text" value={value}
        className="todo-input"
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn todo-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

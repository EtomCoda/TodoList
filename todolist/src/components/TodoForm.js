import React, { useState } from "react";
import classes from "./Todo.module.css"

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Prevent adding empty tasks
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className={classes.todo_input}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={classes.todo_button}>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

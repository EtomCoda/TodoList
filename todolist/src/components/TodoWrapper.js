import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import './Todo.module.css'
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false },
    ]);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todowrapper">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          task={todo}
          onUpdateTask={updateTodo}
          onDeleteTask={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;

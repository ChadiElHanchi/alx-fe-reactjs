import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build Todo App"
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index] = updated[index].includes("✔") ? updated[index].replace("✔", "") : updated[index] + "✔";
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.includes("✔") ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

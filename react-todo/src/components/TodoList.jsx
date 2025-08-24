import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build Todo App"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index] =
      updated[index].endsWith("✔")
        ? updated[index].replace(" ✔", "")
        : updated[index] + " ✔";
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input
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
              cursor: "pointer",
              textDecoration: todo.endsWith("✔") ? "line-through" : "none",
            }}
          >
            {todo}{" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

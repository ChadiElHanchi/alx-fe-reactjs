import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build Todo App"
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodos[index].includes("✔️")
      ? updatedTodos[index].replace(" ✔️", "")
      : updatedTodos[index] + " ✔️";
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
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
              cursor: "pointer",
              textDecoration: todo.includes("✔️") ? "line-through" : "none"
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

import React, { useState } from "react";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";
const TodoList = ({ todos, setTodos }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const startEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="app-container">
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed todo-item " : "todo-item"}
          >
            {editId === todo.id ? (
              <>
                <div>
                  <UpdateTodo
                    todos={todos}
                    setTodos={setTodos}
                    value={editText}
                    editText={editText}
                    setEditText={setEditText}
                    editId={editId}
                    setEditId={setEditId}
                  />
                </div>
              </>
            ) : (
              <>
                <span onClick={() => toggleStatus(todo.id)}>{todo.text}</span>
                <button
                  onClick={() => startEditTodo(todo.id, todo.text)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

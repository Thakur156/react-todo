import React from "react";

function UpdateTodo({
  todos,
  setTodos,
  value,
  editText,
  setEditText,
  editId,
  setEditId,
}) {
  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText(null);
  };
  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={updateTodo} className="save-btn">
        Update
      </button>
    </>
  );
}

export default UpdateTodo;

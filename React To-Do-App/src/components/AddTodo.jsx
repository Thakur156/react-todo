import React, { useState } from "react";

const AddTodo = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [newtodo, setNewtodo] = useState("");

  //   Add new Todo
  const addTodo = () => {
    if (newtodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newtodo, completed: false }]);
      localStorage.setItem("todosonline", JSON.stringify(todos));
      setNewtodo("");
      console.log(todos);
    }
  };
  return (
    <>
      <h1>React To-Do App</h1>
      <input
        type="text"
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
        placeholder="Add new Todo"
      />
      <button onClick={addTodo}> Add Todo</button>
    </>
  );
};

export default AddTodo;

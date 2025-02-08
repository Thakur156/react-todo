import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todosonline")) || [];
  });
  useEffect(() => {
    localStorage.setItem("todosonline", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};
export default App;

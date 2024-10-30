import { useState } from "react";
export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  function handleTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <form onSubmit={handleTodo}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">등록</button>
    </form>
  );
}

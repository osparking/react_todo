import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTodo(e) {
    e.preventDefault();
    setTodoList([todo]);
    setTodo("");    
  }

  return (
    <div>
      <form onSubmit={handleTodo}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">등록</button>
      </form>
      {console.log(todoList)}
    </div>
  );
}

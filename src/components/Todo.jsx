import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  function handleTodo(e) {
    e.preventDefault();
    // Todo를 API로 전달하거나 스토리지에 저장하세요
    // setTodo("");
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
    </div>
  );
}

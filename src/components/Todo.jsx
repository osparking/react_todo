import { useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form>
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

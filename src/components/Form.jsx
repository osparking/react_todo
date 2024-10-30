import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");
  function handleTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <form className={styles.formtodo} onSubmit={handleTodo}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">등록</button>
    </form>
  );
}

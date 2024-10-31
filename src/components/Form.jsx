import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ subject: "", done: false });
  function handleTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ subject: "", done: false });
  }
  return (
    <form className={styles.formtodo} onSubmit={handleTodo}>
      <div className={styles.container_input}>
        <input
          className={styles.input_modern}
          type="text"
          onChange={(e) => setTodo({ subject: e.target.value, done: false })}
          value={todo.subject}
          placeholder="여기에 할 일을 입력..."
        />
        <button className={styles.button_modern} type="submit">
          등록
        </button>
      </div>
    </form>
  );
}

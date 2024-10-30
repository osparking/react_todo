import TodoLine from "./TodoLine";
import styles from "./todolist.module.css";
export default function TodoList({ todoList }) {
  return (
    <div className={styles.list}>
      {todoList.map((todo) => (
        <TodoLine todo={todo} key={todo} />
      ))}
    </div>
  );
}

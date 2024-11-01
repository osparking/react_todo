import TodoLine from "./TodoLine";
import styles from "./todolist.module.css";
export default function TodoList({ todoList, setTodoList }) {
  const sorted = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sorted.map((todo) => (
        <TodoLine
          todo={todo}
          key={todo.subject}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}

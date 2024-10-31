import TodoLine from "./TodoLine";
import styles from "./todolist.module.css";
export default function TodoList({ todoList, setTodoList }) {
  return (
    <div className={styles.list}>
      {todoList.map((todo) => (
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

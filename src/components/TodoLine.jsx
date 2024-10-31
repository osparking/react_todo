import styles from "./todoline.module.css";
export default function TodoLine({ todo, todoList, setTodoList }) {
  function deleteTodo(todo) {
    setTodoList(todoList.filter((item) => item!== todo));
  }
  return (
    <div className={styles.todoLine}>
      <div className={styles.todoName}>
        {todo.subject}
        <span>
          <button
            onClick={() => deleteTodo(todo)}
            className={styles.buttonDelete}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.hLine} />
    </div>
  );
}

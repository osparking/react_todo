import styles from "./todoline.module.css";
export default function TodoLine({ todo }) {
  function deleteTodo(todo) {
    console.log("삭제 시도된 할일 : " + todo);
  }
  return (
    <div className={styles.todoLine}>
      <div className={styles.todoName}>
        {todo}
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

import styles from "./todoline.module.css";
export default function TodoLine({ todo }) {
  function deleteTodo() {
    console.log("할일 삭제 시도됨");
  }
  return (
    <div className={styles.todoLine}>
      <div className={styles.todoName}>
        {todo}
        <span>
          <button onClick={deleteTodo} className={styles.buttonDelete}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.hLine} />
    </div>
  );
}

import styles from "./todoline.module.css";
export default function TodoLine({ todo }) {
  return (
    <div className={styles.todoLine} >
      <div className={styles.todoName}>{todo}</div>
      <span>
        <button>X</button>
      </span>
      <hr className={styles.hLine} />
    </div>
  );
}

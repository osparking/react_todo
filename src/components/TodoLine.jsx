import styles from "./todoline.module.css";
export default function TodoLine({ todo, todoList, setTodoList }) {
  function deleteTodo(todo) {
    setTodoList(todoList.filter((item) => item !== todo));
  }
  function subjectClicked(subject) {
    console.log("Subject clicked", subject);
  }

  return (
    <div className={styles.todoLine}>
      <div className={styles.todoName}>
        <span onClick={() => subjectClicked(todo.subject)}>{todo.subject}</span>
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

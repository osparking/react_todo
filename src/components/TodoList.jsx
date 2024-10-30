import TodoLine from "./TodoLine";
export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoLine todo={todo} key={todo} />
      ))}
    </div>
  );
}

import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const completedCount = todoList.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <h1>{completedCount}</h1>
    </div>
  );
}

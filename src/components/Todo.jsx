import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const completedCount = todoList.filter((todo) => todo.done).length;
  const totalCount = todoList.length;
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer completedCount={completedCount} totalCount={totalCount} />
    </div>
  );
}

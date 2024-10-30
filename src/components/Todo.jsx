import { useState } from "react";
import Form from "./Form";
import TodoLine from "./TodoLine";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTodo(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  return (
    <div>
      <Form />
      {todoList.map((todo) => (
        <TodoLine todo={todo} key={todo} />
      ))}
    </div>
  );
}

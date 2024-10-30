import { useState } from "react";
import Form from "./Form";
import TodoLine from "./TodoLine";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Form />
      {todoList.map((todo) => (
        <TodoLine todo={todo} key={todo} />
      ))}
    </div>
  );
}

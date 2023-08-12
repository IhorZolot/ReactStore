import { id } from "date-fns/locale";
import React, { useState } from "react";

const data = [
  { title: "Buy milk", id: 1, completed: false },
  { title: "Buy phone", id: 2, completed: false },
  { title: "Play football", id: 3, completed: false },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(data);

  const deleteTodo = (id) => {
    setTodos((pver) => pver.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

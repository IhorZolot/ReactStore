import { id } from "date-fns/locale";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

const data = [
  { title: "Buy milk", id: 1, completed: false },
  { title: "Buy phone", id: 2, completed: false },
  { title: "Play football", id: 3, completed: false },
];

export const TodoList = () => {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  const deleteTodo = (id) => {
    setTodos((pver) => pver.filter((item) => item.id !== id));
  };

  const addTodo = () => {
    if (!input) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      { title: input, id: nanoid(), completed: false },
    ]);
    setInput("");
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const todosFromLs = localStorage.getItem("todo");
    if (todosFromLs) {
      const persetData = JSON.parse(todosFromLs);
      console.log(persetData);
      if (persetData.length) setTodos(persetData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const deleteAll = () => {
    setTodos([]);
  };
  const changeCheckbox = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <button onClick={addTodo}>AddTodo</button>
      <input type="text" onChange={changeInput} value={input} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => changeCheckbox(todo.id)}
            ></input>
            <h2>{todo.title}</h2>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
        <button onClick={deleteAll}>DelAll</button>
      </ul>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";

const CallApi = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
      setTodos(data);
    });
    return unsubscribe;
  }, [todos]);

  return (
    <div>
      <h6>Todo List</h6>
      {todos && todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
};

export default CallApi;

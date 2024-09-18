import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const res = axios.get("https://dummyjson.com/todos").then(function (response) {
      setTodos(response.data.todos);
    });
  });

  return (
    <>
      {todos.map((todo) => {
        <Todo title={todo.title} description={todo.description}/>;
      })}
    </>
  );
}

function Todo(title,description) {
  return (
    <>
    <h2>{title}</h2>
    <p>{description}</p>
    </>
  )
}

export default App;

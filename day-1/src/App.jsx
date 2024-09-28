import { useEffect, useState } from "preact/hooks";

import axios from "axios";
import "./app.css";

export function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <>
    
      <button
        onClick={() => {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setSelectedId(4);
        }}
      >
        4
      </button>
      <Todo id={selectedId} />
    </>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos?todoId=${id}`)
      .then(function (response) {
        setTodos(response.data);
      });
  }, [id]);
  return (
    <>
    <br />
      id:{id}
      <h1>{todos.title}</h1>
      {todos.description}
    </>
  );
}

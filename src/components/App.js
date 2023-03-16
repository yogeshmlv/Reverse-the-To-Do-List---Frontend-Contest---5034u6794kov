import React, { useState } from "react";
import "../styles/App.css";

function ToDo(props) {
  return (
    <tr>
      <td>
        <p>{props.id}</p>
      </td>
      <td>
        <input />
      </td>
      <td>
        <p>{props.createdAt}</p>
      </td>
    </tr>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "20:30",
    },
    {
      id: "todo2",
      createdAt: "18:00",
    },
  ]);
  const reverseHandler = () => {
    const arr = [];
    arr[0] = todos[1];
    arr[1] = todos[0];
    setTodos(arr);
  };

  return (
    <div id="main">
      <button onClick={reverseHandler}>Reverse</button>
      <table>
        <tbody>
          {todos.map((el) => {
            return <ToDo key={el.id} id={el.id} createdAt={el.createdAt} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../styles/App.css';

function ToDo({ id, task, createdAt }) {
  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <input value={task} />
      </td>
      <td>
        <p>{createdAt}</p>
      </td>
    </tr>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      task: 'Buy groceries',
      createdAt: '20:30',
    },
    {
      id: 'todo2',
      task: 'Clean the house',
      createdAt: '18:00',
    },
  ]);

  const reverseOrder = () => {
    setTodos(prevTodos => [...prevTodos].reverse());
  };

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>input</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDo key={todo.id} id={todo.id} task={todo.task} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import { fetchTodos } from './service';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    async function onMount() {
      const todos = await fetchTodos();
      setTodos(todos || []);
    }
    onMount()
  }, [])

  return (
    <ul>
      {todos.map(({ id, task, completed }) => 

        <li style={{ textDecoration: completed ? "line-through" : "none" }} key={id}>{task}</li>

      )}
    </ul>
  )
}

export default App

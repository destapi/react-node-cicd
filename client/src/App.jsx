import { useState, useEffect } from 'react';
import './App.css';
import { getUsers } from './service';

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {

    async function onMount(){
      const users = await getUsers();
      setNames(users || []);
    }
    onMount()
  }, [])

  return (
    <ul>
      {names.map(({id, name}) => <li key={id}>{name}</li>)}
    </ul>
  )
}

export default App

import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  const [todo, setTodo] = useState({
    text: "", completed: false, id: Math.floor(Math.random() * 1000)
  })
  const [todos, setTodos] = useState([])
  return (
    <div className="App">

      <Form todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos} />

      <Todos todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;

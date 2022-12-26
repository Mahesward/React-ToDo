import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import TodoLists from './components/TodoLists';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

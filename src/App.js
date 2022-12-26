import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoLists from './components/TodoLists';

function App() {

  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status])

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos)
        break;
    }
  }
  
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoLists
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos} />
    </>
  );
}

export default App;

import React from 'react'

function Form({ setInputText, inputText, todos, setTodos }) {

  //SetState
  const inputTodoHandler = (e) => {
    setInputText(e.target.value);
  }

  // Submit todo
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  }

  return (

    <div>
      <form>
        <input value={inputText} onChange={inputTodoHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form

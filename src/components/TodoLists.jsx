import React from 'react'
import Todo from './Todo';

function TodoLists({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">{
        todos.map((todo) => (
          <Todo key={todo.id} text={todo.text}  todos={todos} setTodos={setTodos} todo={todo} />
        ))
      }</ul>
    </div>
  )
}

export default TodoLists

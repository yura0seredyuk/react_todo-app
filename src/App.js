import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';

const todosFromServer = [
  { id: 1, title: '324234', completed: true },
  { id: 2, title: 'sdfsdfsfd', completed: false },
  { id: 3, title: 'fsdfsdfsdfsdfsdsdf', completed: true },
  { id: 4, title: '2', completed: false },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState('true');

  useEffect(() => {
    setTodos(todosFromServer);
  }, []);

  const changeCheckbox = (todoId, newCheck) => {
    const checkedTodo = todos.find(todo => todo.id === todoId);

    checkedTodo.completed = newCheck;

    setTodos(todos.map(todo => todo));
  };

  const setCheckedAllTodos = (isChecked) => {
    if (isChecked) {
      setTodos(todos.map(todo => ({ ...todo, completed: true })));
    } else {
      setTodos(todos.map(todo => ({ ...todo, completed: false })));
    }
  };

  // console.log(todos);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </form>
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          onChange={() => {
            setChecked(!checked);
            setCheckedAllTodos(checked);
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          items={todos}
          changeCheckbox={changeCheckbox}
        />

      </section>

      <footer className="footer">
        <span className="todo-count">
          {`${todos.length} items left`}
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;

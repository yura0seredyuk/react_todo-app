import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';

const todosFromServer = [
  { id: 1, title: '324234', completed: true },
  { id: 2, title: 'sdfsdfsfd', completed: false },
  { id: 3, title: 'fsdfsdfsdfsdfsdsdf', completed: true },
  { id: 4, title: '2', completed: true },
];

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosFromServer);
  }, [todos]);

  const handleChangeCompleted = (id) => {
    setTodos(!todos.find(todo => todo.id === id).completed);
  };

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
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList items={todos} completed={handleChangeCompleted} />

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

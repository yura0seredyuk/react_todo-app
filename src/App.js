import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';

const todosFromServer = [
  { id: 1, title: '324234', completed: true },
  { id: 2, title: 'sdfsdfsfd', completed: false },
  { id: 3, title: 'fsdfsdfsdfsdfsdsdf', completed: true },
  { id: 4, title: '2', completed: false },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [checked, setChecked] = useState('true');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setTodos(todosFromServer);
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setTitle(value);
  };

  const handleSubmit = (event) => {
    if (title !== '') {
      const newTodo = {
        id: +new Date(),
        title,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setTitle('');
    }
  };

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

  const switchFilter = (filteredBy) => {
    let visibleTodos;

    switch (filteredBy) {
      case 'all':
        visibleTodos = todos;
        break;

      case 'active':
        visibleTodos = todos.filter(todo => todo.completed === false);
        break;

      case 'completed':
        visibleTodos = todos.filter(todo => todo.completed === true);
        break;

      default:
        visibleTodos = todos;
    }

    return visibleTodos;
  };

  const filterBy = (filteredBy) => {
    setActiveFilter(filteredBy);
    switchFilter(filteredBy);
  };

  const filteredTodos = switchFilter(activeFilter);

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const handleDeleteAllTodos = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  };

  // console.log(filteredTodos);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={title}
            onChange={handleInputChange}
          />
        </form>
      </header>

      {todos.length !== 0 && (
        <>
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
              items={filteredTodos}
              changeCheckbox={changeCheckbox}
              handleDeleteTodo={handleDeleteTodo}
            />
          </section>

          <footer className="footer">
            <span className="todo-count">
              {`${todos.length} items left`}
            </span>
            <TodoFilter
              filterBy={filterBy}
              activeFilter={activeFilter}
            />
            {todos.filter(todo => todo.completed === true).length >= 1 && (
              <button
                type="button"
                className="clear-completed"
                onClick={handleDeleteAllTodos}
              >
                Clear completed
              </button>
            )}
          </footer>
        </>
      )}
    </section>
  );
}

export default App;

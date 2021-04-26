import React, { useState } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const TodoList = ({ items, changeCheckbox, handleDeleteTodo }) => {
  // eslint-disable-next-line no-unused-vars
  const [v, sv] = useState('');

  return (
    <ul className="todo-list">
      {/* eslint-disable-next-line react/prop-types */}
      {items.map(todo => (
        <li
          key={todo.id}
          className={classNames(todo.completed ? 'completed' : '')}
        >
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              checked={todo.completed}
              onChange={() => {
                changeCheckbox(todo.id, !todo.completed);
              }}
            />
            <label>{todo.title}</label>
            <button
              type="button"
              className="destroy"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </div>
          <input type="text" className="edit" />
        </li>
      ))}
    </ul>
  );
};

// <li className="completed">
//   <div className="view">
//     <input type="checkbox" className="toggle" />
//     <label>qwertyuio</label>
//     <button type="button" className="destroy" />
//   </div>
//   <input type="text" className="edit" />
// </li>
//
// <li className="editing">
//   <div className="view">
//     <input type="checkbox" className="toggle" />
//     <label>zxcvbnm</label>
//     <button type="button" className="destroy" />
//   </div>
//   <input type="text" className="edit" />
// </li>
//
// <li>
//   <div className="view">
//     <input type="checkbox" className="toggle" />
//     <label>1234567890</label>
//     <button type="button" className="destroy" />
//   </div>
//   <input type="text" className="edit" />
// </li>

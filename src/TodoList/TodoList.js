import React from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const TodoList = ({ items, completed }) => (
  <ul className="todo-list">
    {/* eslint-disable-next-line react/prop-types */}
    {items.map(item => (
      <li
        key={item.id}
        className={classNames(item.completed ? 'completed' : '')}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => completed(item.id)}
          />
          <label>{item.title}</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>
    ))}
  </ul>
);

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

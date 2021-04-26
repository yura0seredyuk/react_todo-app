// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const TodoFilter = ({ filterBy, activeFilter }) => {
  const handleFilterBy = (filterParameter) => {
    filterBy(filterParameter);
  };

  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames(activeFilter === 'all' ? 'selected' : '')}
          onClick={() => handleFilterBy('all')}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={classNames(activeFilter === 'active' ? 'selected' : '')}
          onClick={() => handleFilterBy('active')}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={classNames(activeFilter === 'completed' ? 'selected' : '')}
          onClick={() => handleFilterBy('completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

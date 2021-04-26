import React, { useState } from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const TodoFilter = ({ filterBy, activeFilter }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');

  const handleChangeVisibility = (filterParameter) => {
    filterBy(filterParameter);
  };

  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames(activeFilter === 'all' ? 'selected' : '')}
          onClick={() => handleChangeVisibility('all')}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={classNames(activeFilter === 'active' ? 'selected' : '')}
          onClick={() => handleChangeVisibility('active')}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={classNames(activeFilter === 'completed' ? 'selected' : '')}
          onClick={() => handleChangeVisibility('completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

import React from 'react';
import Filter from '../tasksfilter/tasksfilter';

const Footer = ({ toDo, onFilter, clear, term }) => {
  let left = toDo + ' items left';
  return (
    <footer className="footer">
      <span className="todo-count">{left}</span>
      <Filter onFilter={onFilter} term={term} />
      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

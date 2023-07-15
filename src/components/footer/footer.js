import React from "react";

const Footer = ({ toDo, done }) => {
  let left = toDo + " items left";
  return (
    <footer className="footer">
      <span className="todo-count">{left}</span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;

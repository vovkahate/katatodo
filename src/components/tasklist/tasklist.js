import React from "react";
import Task from "../task/task";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, condition, ...props } = item;

    return (
      <li className={condition}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <Task {...props} />
            <span className="description"></span>
            <span className="created">5 min ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

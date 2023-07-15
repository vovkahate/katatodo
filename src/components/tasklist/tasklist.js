import React from "react";
import Task from "../task/task";

const TaskList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    return <Task {...item} onDeleted={() => onDeleted(item.id)} />;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

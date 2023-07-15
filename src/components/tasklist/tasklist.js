import React from "react";
import Task from "../task/task";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    return <Task {...item} />;
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

import React from 'react';
import Task from '../task/task';

const TaskList = ({ todos, onDeleted, onToggleDone, onItemEdited, onToggleTimerButton }) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        {...item}
        onDeleted={() => onDeleted(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
        onItemEdited={onItemEdited}
        onToggleTimerButton={() => onToggleTimerButton(item.id)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

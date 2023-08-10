import React from 'react';
import Task from '../task/task';

const TaskList = ({ todos, onDeleted, onToggleDone, onItemEdited, handleTimerButton }) => {
  const elements = todos.map((item) => {
    return (
      <Task
        key={item.id}
        {...item}
        onDeleted={onDeleted}
        onToggleDone={onToggleDone}
        onItemEdited={onItemEdited}
        handleTimerButton={handleTimerButton}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

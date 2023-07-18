import React from "react";
import Task from "../task/task";

export default class TaskList extends React.Component {
  render() {
    const { todos, onDeleted, onToggleDone, setEditedChange, onItemEdited } =
      this.props;
    const elements = todos.map((item) => {
      return (
        <Task
          key={item.id}
          {...item}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onItemEdited={onItemEdited}
        />
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}

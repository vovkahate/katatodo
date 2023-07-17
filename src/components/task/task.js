import React from "react";
import { parse, formatDistanceToNow } from "date-fns";

export default class Task extends React.Component {
  render() {
    const { id, date, label, onDeleted, onToggleDone, done } = this.props;

    let classCondition = "";
    if (done) classCondition += "completed";
    const result = formatDistanceToNow(new Date(date));
    return (
      <li id={id} className={classCondition}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onToggleDone}
            checked={done}
          />
          <label>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">{result}</span>
          </label>

          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

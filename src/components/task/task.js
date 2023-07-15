import React from "react";

export default class Task extends React.Component {
  render() {
    const { id, condition, label, onDeleted, onToggleDone, done } = this.props;

    let classCondition = "";
    if (done) classCondition += "completed";

    return (
      <li className={classCondition}>
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
            <span className="created">5 min ago</span>
          </label>

          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

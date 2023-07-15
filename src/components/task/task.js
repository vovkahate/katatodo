import React from "react";

export default class Task extends React.Component {
  state = {
    done: false,
  };

  //const [checked, setChecked] = useState(false)

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  render() {
    const { id, condition, label, onDeleted } = this.props;

    const { done } = this.state;

    let classCondition = "";
    if (done) classCondition += "completed";

    return (
      <li className={classCondition}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.onLabelClick}
            checked={this.state.done}
          />
          <label>
            <span className="description" onClick={this.onLabelClick}>
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

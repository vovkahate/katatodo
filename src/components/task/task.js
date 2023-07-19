import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  state = {
    isEditing: false,
    oldLabel: this.props.label,
    editedLabel: this.props.label,
    newLabel: '',
  };

  handleEdit = (event) => {
    this.setState({ isEditing: true });
  };

  onLabelChange = (e) => {
    if (e.key === 'Escape') {
      this.setState({
        isEditing: false,
        editedLabel: this.state.oldLabel,
      });
    } else {
      this.setState({
        newLabel: e.target.value,
        editedLabel: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemEdited(this.state.newLabel, this.props.id);
    this.setState({ isEditing: false });
  };

  render() {
    const { date, label, onDeleted, onToggleDone, done } = this.props;

    let classCondition = '';
    if (done) classCondition += 'completed';
    const result = formatDistanceToNow(date, { addSuffix: true });

    if (!this.state.isEditing) {
      return (
        <li className={classCondition}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
            <label>
              <span className="description" onClick={onToggleDone}>
                {label}
              </span>
              <span className="created">created {result}</span>
            </label>

            <button className="icon icon-edit" onClick={this.handleEdit}></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
        </li>
      );
    } else
      return (
        <li className="editing">
          <form onSubmit={this.onSubmit}>
            <input
              onSubmit={this.onSubmit}
              type="text"
              className="edit"
              //placeholder={this.state.editedLabel}
              value={this.state.editedLabel}
              onChange={(e) => this.onLabelChange(e)}
              onKeyDown={this.onLabelChange}
            />
          </form>
        </li>
      );
  }
}

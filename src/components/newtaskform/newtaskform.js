import React from "react";

export default class NewTaskForm extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onSubmit={this.onSubmit}
          autoFocus
          onChange={this.onLabelChange}
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
        />
      </form>
    );
  }
}

import React from "react";
import NewTaskForm from "../newtaskform";
import PropTypes from "prop-types";

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <NewTaskForm onItemAdded={this.props.onItemAdded} />
      </header>
    );
  }
}

// static propTypes = {
//   onItemAdded: PropTypes.func,
// };

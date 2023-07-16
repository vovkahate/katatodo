import React from "react";
import Filter from "../tasksfilter/tasksfilter";

export default class Footer extends React.Component {
  render() {
    let left = this.props.toDo + " items left";

    return (
      <footer className="footer">
        <span className="todo-count">{left}</span>
        <Filter onFilter={this.props.onFilter} />
        <button className="clear-completed" onClick={this.props.clear}>
          Clear completed
        </button>
      </footer>
    );
  }
}

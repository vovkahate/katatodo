import React from "react";

export default class Filter extends React.Component {
  state = {
    term: "",
  };

  onComplete = () => {
    this.setState({ term: "completed" });
    this.props.onFilter("completed");
  };

  onAll = () => {
    this.setState({ term: "all" });
    this.props.onFilter("all");
  };

  onActive = () => {
    this.setState({ term: "active" });
    this.props.onFilter("active");
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected" onClick={this.onAll}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.onActive}>Active</button>
        </li>
        <li>
          <button onClick={this.onComplete}>Completed</button>
        </li>
      </ul>
    );
  }
}

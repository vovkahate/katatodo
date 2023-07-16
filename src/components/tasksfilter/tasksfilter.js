import React from "react";

export default class Filter extends React.Component {
  state = {
    term: "",
    classAll: "selected",
    classActive: "",
    classCompleted: "",
  };

  onComplete = () => {
    this.setState({ term: "completed" });
    this.props.onFilter("completed");
    this.setState({
      classAll: "",
      classActive: "",
      classCompleted: "selected",
    });
  };

  onAll = () => {
    this.setState({ term: "all" });
    this.props.onFilter("all");
    this.setState({
      classAll: "selected",
      classActive: "",
      classCompleted: "",
    });
  };

  onActive = () => {
    this.setState({ term: "active" });
    this.props.onFilter("active");
    this.setState({
      classAll: "",
      classActive: "selected",
      classCompleted: "",
    });
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button className={this.state.classAll} onClick={this.onAll}>
            All
          </button>
        </li>
        <li>
          <button className={this.state.classActive} onClick={this.onActive}>
            Active
          </button>
        </li>
        <li>
          <button
            className={this.state.classCompleted}
            onClick={this.onComplete}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

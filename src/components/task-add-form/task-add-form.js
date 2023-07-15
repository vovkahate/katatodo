import React from "react";

export default class ItemAddForm extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onItemAdded("Hello")}>Add el</button>
      </div>
    );
  }
}

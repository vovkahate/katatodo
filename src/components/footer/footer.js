import React from "react";
import Filter from "../tasksfilter/tasksfilter";

export default class Footer extends React.Component {
  render() {
    let left = this.props.toDo + " items left";

    return (
      <footer className="footer">
        <span className="todo-count">{left}</span>
        <Filter onFilter={this.props.onFilter} />
      </footer>
    );
  }
}

// const Footer = ({ toDo, onFilter }) => {
//   let left = toDo + " items left";

//   return (
//     <footer className="footer">
//       <span className="todo-count">{left}</span>
//       <Filter onFilter={onFilter} />
//     </footer>
//   );
// };

// export default Footer;

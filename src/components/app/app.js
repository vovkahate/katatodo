import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";
import ItemAddForm from "../task-add-form/task-add-form";

export default class App extends React.Component {
  maxId = 100;

  state = {
    taskData: [
      { id: 1, label: "Drink Coffe", condition: "completed" },
      { id: 2, label: "Make Awesome App", condition: "" },
      { id: 3, label: "Have a lunch", condition: "" },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => id === el.id);

      // const before = taskData.slice(0, idx)
      // const after = taskData.slice(idx+1)
      // const newArray = [...before, ...after]

      return { taskData: taskData.toSpliced(idx, 1) };
    });
  };

  addItem = (text) => {
    //
    console.log("added ", text);
    const newItem = {
      label: text,
      id: this.maxId++,
    };

    this.setState(({ taskData }) => {
      const newArray = [...taskData, newItem];

      return { taskData: newArray };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList todos={this.state.taskData} onDeleted={this.deleteItem} />
          <ItemAddForm onItemAdded={this.addItem} />
          <Footer />
        </section>
      </section>
    );
  }
}

import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";
import ItemAddForm from "../task-add-form/task-add-form";

export default class App extends React.Component {
  maxId = 100;

  state = {
    taskData: [
      this.createTaskItem("Drink coffe"),
      this.createTaskItem("Make Awesome App"),
      this.createTaskItem("Have a lunch"),
    ],
    term: "all",
  };

  createTaskItem(label) {
    return {
      label,
      id: this.maxId++,
      done: false,
    };
  }

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => id === el.id);

      return { taskData: taskData.toSpliced(idx, 1) };
    });
  };

  addItem = (text) => {
    const newItem = this.createTaskItem(text);
    this.setState(({ taskData }) => {
      const newArray = [...taskData, newItem];

      return { taskData: newArray };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => id === el.id);

      const oldItem = taskData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...taskData.slice(0, idx),
        newItem,
        ...taskData.slice(idx + 1),
      ];

      return { taskData: newArray };
    });
  };

  onFilter = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term === "all") return items;
    else if (term === "completed") {
      return items.filter((item) => item.done);
    } else if (term === "active") {
      return items.filter((item) => !item.done);
    }
  }

  render() {
    const { taskData, term } = this.state;
    const visibleItems = this.search(taskData, term);

    const doneCount = this.state.taskData.filter((el) => el.done).length;
    const todoCount = this.state.taskData.length - doneCount;

    //const doneFilter = this.state.taskData.filter((el) => el.done);
    //const undoneFilter = this.state.taskData.filter((el) => !el.done);

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.addItem} />

        <section className="main">
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
          <Footer
            toDo={todoCount}
            done={doneCount}
            // doneFilter={doneFilter}
            // undoneFilter={undoneFilter}
            onFilter={this.onFilter}
          />
        </section>
      </section>
    );
  }
}

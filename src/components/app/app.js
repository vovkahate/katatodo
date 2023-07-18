import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";

import { v4 as uuidv4 } from "uuid";
export default class App extends React.Component {
  static defaultProps = {
    done: false,
  };

  state = {
    taskData: [],
    term: "all",
  };

  componentDidMount() {
    const storedData = localStorage.getItem("taskData");

    if (storedData) {
      this.setState({
        taskData: JSON.parse(storedData),
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("taskData", JSON.stringify(this.state.taskData));
  }

  createTaskItem(label) {
    return {
      label,
      id: uuidv4(),
      done: false,
      date: Date.now(),
    };
  }
  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const updatedTaskData = taskData.filter((el) => el.id !== id);

      return { taskData: updatedTaskData };
    });
  };

  addItem = (text) => {
    if (text === "" || text.replaceAll(" ", "").length === 0) {
      // const newItem = this.createTaskItem("Empty task");
      // this.setState(({ taskData }) => {
      //   const updatedTaskData = [...taskData, newItem];
      //   return { taskData: updatedTaskData };
      // });
    } else {
      const newItem = this.createTaskItem(text.trim());
      this.setState(({ taskData }) => {
        const updatedTaskData = [...taskData, newItem];

        return { taskData: updatedTaskData };
      });
    }
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

  clearCompleted = () => {
    this.setState(({ taskData }) => {
      const newArr = taskData.filter((el) => !el.done);
      return { taskData: newArr };
    });
  };

  search(items, term) {
    if (term === "all") return items;
    else if (term === "completed") {
      return items.filter((item) => item.done);
    } else if (term === "active") {
      return items.filter((item) => !item.done);
    }
  }

  onItemEdited = (x, id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => id === el.id);

      const oldItem = taskData[idx];
      const newItem = { ...oldItem, label: x };

      const newArray = [
        ...taskData.slice(0, idx),
        newItem,
        ...taskData.slice(idx + 1),
      ];

      return { taskData: newArray };
    });
  };

  render() {
    const { taskData, term } = this.state;
    const visibleItems = this.search(taskData, term);

    const doneCount = this.state.taskData.filter((el) => el.done).length;
    const todoCount = this.state.taskData.length - doneCount;

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.addItem} />

        <section className="main">
          <TaskList
            setEditedChange={this.setEditedChange}
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onItemEdited={this.onItemEdited}
          />
          <Footer
            toDo={todoCount}
            done={doneCount}
            onFilter={this.onFilter}
            clear={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}

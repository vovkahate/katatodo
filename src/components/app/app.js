import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";
const App = () => {
  const taskData = [
    { id: 1, label: "Drink Coffe", condition: "completed" },
    { id: 2, label: "Make Awesome App", condition: "" },
    { id: 3, label: "Have a lunch", condition: "" },
  ];

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TaskList todos={taskData} />
        <Footer />
      </section>
    </section>
  );
};

export default App;

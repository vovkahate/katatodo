import React from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";
const App = () => {
  const taskData = [
    { label: "Drink Coffe", important: false, condition: "completed" },
    { label: "Make Awesome App", important: true, condition: "" },
    { label: "Have a lunch", important: false, condition: "editing" },
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

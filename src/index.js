import React from "react";
import ReactDOM from "react-dom/client";

import AppHeader from "./components/header";
import TaskList from "./components/tasklist/tasklist";
import Footer from "./components/footer/footer";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

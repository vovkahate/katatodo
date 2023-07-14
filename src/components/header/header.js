import React from "react";
import NewTaskForm from "../newtaskform";

const AppHeader = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <NewTaskForm />
    </header>
  );
};

export default AppHeader;

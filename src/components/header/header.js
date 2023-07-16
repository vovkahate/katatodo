import React from "react";
import NewTaskForm from "../newtaskform";

const AppHeader = ({ onItemAdded }) => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  );
};

export default AppHeader;

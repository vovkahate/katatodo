import React, { useState } from 'react';

const NewTaskForm = React.memo(({ onItemAdded }) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label);
    setLabel('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onSubmit={onSubmit}
        autoFocus
        onChange={onLabelChange}
        className="new-todo"
        placeholder="What needs to be done?"
        value={label}
      />
    </form>
  );
});

export default NewTaskForm;

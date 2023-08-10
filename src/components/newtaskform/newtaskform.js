import React, { useState } from 'react';

const NewTaskForm = ({ onItemAdded }) => {
  const [formData, setFormData] = useState({
    label: '',
    minutes: '',
    seconds: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(formData.label, formData.minutes, formData.seconds);
    setFormData({
      label: '',
      minutes: '',
      seconds: '',
    });
  };
  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="label"
        autoFocus
        onChange={handleChange}
        className="new-todo"
        placeholder="What needs to be done?"
        value={formData.label}
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Min"
        name="minutes"
        value={formData.minutes}
        onChange={handleChange}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        name="seconds"
        value={formData.seconds}
        onChange={handleChange}
      />
      <button style={{ visibility: 'hidden' }} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default NewTaskForm;

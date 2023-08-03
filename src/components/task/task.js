import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const Task = ({ date, label, onDeleted, onToggleDone, done, onItemEdited, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [oldLabel, setOldLabel] = useState(label);
  const [editedLabel, setEditedLabel] = useState(label);
  const [newLabel, setNewLabel] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const onLabelChange = (e) => {
    if (e.key === 'Escape') {
      cancelEdit();
    } else {
      const newLabel = e.target.value.replaceAll('  ', ' ');
      if (newLabel !== editedLabel) {
        setNewLabel(newLabel);
        setEditedLabel(newLabel);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newLabel === '' || newLabel.trim().length === 0) {
      cancelEdit();
    } else {
      onItemEdited(newLabel, id);
      setIsEditing(false);
      setOldLabel(newLabel);
      setNewLabel('');
    }
  };

  const handleClickOutside = () => {
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedLabel(oldLabel);
    setNewLabel('');
    setOldLabel(oldLabel);
  };

  let classCondition = done ? 'completed' : '';
  const result = formatDistanceToNow(date, { addSuffix: true });

  if (!isEditing) {
    return (
      <li className={classCondition}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
          <label>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">created {result}</span>
          </label>

          <button className="icon icon-edit" onClick={handleEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  } else
    return (
      <li className="editing">
        <form onSubmit={onSubmit}>
          <input
            onSubmit={onSubmit}
            type="text"
            className="edit"
            value={editedLabel}
            onChange={(e) => onLabelChange(e)}
            onKeyDown={onLabelChange}
            onBlur={handleClickOutside}
            autoFocus
          />
        </form>
      </li>
    );
};

export default Task;

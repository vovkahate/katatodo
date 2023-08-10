import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer/timer';

const Task = ({
  label,
  onDeleted,
  onToggleDone,
  done,
  onItemEdited,
  id,
  date,
  timerButton,
  seconds,
  handleTimerButton,
}) => {
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
  let classTimerButton = !timerButton ? 'icon icon-play' : 'icon icon-pause';

  if (!isEditing) {
    return (
      <li className={classCondition} style={{ pointerEvents: 'none' }}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onToggleDone}
            checked={done}
            style={{ pointerEvents: 'auto' }}
          />
          <label>
            <span
              style={{ pointerEvents: 'auto' }}
              className="title"
              onClick={(e) => {
                if (e.target !== e.currentTarget) {
                  return;
                }
                onToggleDone(id);
              }}
            >
              {label}
            </span>

            <span
              className="description"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => {
                if (e.target !== e.currentTarget) {
                  return;
                }
              }}
            >
              <button className={classTimerButton} style={{ visibility: 'hidden', width: '1', height: '1' }}></button>
              <Timer
                timerButton={timerButton}
                id={id}
                done={done}
                seconds={seconds}
                handleTimerButton={handleTimerButton}
              />
            </span>

            <span className="description" style={{ whiteSpace: 'nowrap' }}>
              created {result}
            </span>
          </label>

          <button className="icon icon-edit" style={{ pointerEvents: 'auto' }} onClick={handleEdit}></button>
          <button
            className="icon icon-destroy"
            style={{ pointerEvents: 'auto' }}
            onClick={() => onDeleted(id, label)}
          ></button>
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
            timerButton={timerButton}
            autoFocus
          />
        </form>
      </li>
    );
};

export default Task;

import React from 'react';

const Filter = ({ term, onFilter }) => {
  const buttonsArr = [
    { tag: 'all', label: 'All' },
    { tag: 'active', label: 'Active' },
    { tag: 'completed', label: 'Completed' },
  ];
  const buttons = buttonsArr.map((button) => {
    const isActive = button.tag === term;
    const classCheck = isActive ? 'selected' : '';
    return (
      <li key={button.tag}>
        <button className={classCheck} onClick={() => onFilter(button.tag)}>
          {button.label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttons}</ul>;
};

export default Filter;

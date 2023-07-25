import React from 'react';

export default class Filter extends React.Component {
  buttons = [
    { tag: 'all', label: 'All' },
    { tag: 'active', label: 'Active' },
    { tag: 'completed', label: 'Completed' },
  ];

  render() {
    const buttons = this.buttons.map((button) => {
      const isActive = button.tag === this.props.term;
      const classCheck = isActive ? 'selected' : '';
      return (
        <li>
          <button className={classCheck} onClick={() => this.props.onFilter(button.tag)}>
            {button.label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}

import React, { useEffect, useState } from 'react';
import AppHeader from '../header';
import TaskList from '../tasklist/tasklist';
import Footer from '../footer/footer';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedData = localStorage.getItem('taskData');

    if (storedData) {
      setTaskData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskData', JSON.stringify(taskData));
  }, [taskData]);

  const createTaskItem = (label) => {
    return {
      label,
      id: uuidv4(),
      done: false,
      date: Date.now(),
      timerButton: false,
    };
  };

  const deleteItem = (id) => {
    setTaskData((prevTaskData) => prevTaskData.filter((el) => el.id !== id));
  };

  const addItem = (text) => {
    if (text === '' || text.replaceAll(' ', '').length === 0) {
      return;
    } else {
      const newItem = createTaskItem(text.trim());
      setTaskData((prevTaskData) => [...prevTaskData, newItem]);
    }
  };

  const onToggleDone = (id) => {
    setTaskData((prevTaskData) => {
      return prevTaskData.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
  };

  const clearCompleted = () => {
    setTaskData((prevTaskData) => prevTaskData.filter((el) => !el.done));
  };

  const onFilter = (term) => {
    setFilter(term);
  };

  const search = (items, filter) => {
    if (filter === 'all') return items;
    else if (filter === 'completed') {
      return items.filter((item) => item.done);
    } else if (filter === 'active') {
      return items.filter((item) => !item.done);
    }
  };

  const onItemEdited = (x, id) => {
    setTaskData((prevTaskData) => {
      return prevTaskData.map((item) => {
        if (item.id === id) {
          return { ...item, label: x };
        }
        return item;
      });
    });
  };

  const onToggleTimerButton = (id) => {
    setTaskData((prevTaskData) => {
      return prevTaskData.map((item) => {
        if (item.id === id) {
          return { ...item, timerButton: !item.timerButton };
        }
        return item;
      });
    });
  };

  const visibleItems = search(taskData, filter);
  const doneCount = taskData.filter((el) => el.done).length;
  const todoCount = taskData.length - doneCount;

  return (
    <section className="todoapp">
      <AppHeader onItemAdded={addItem} />

      <section className="main">
        <TaskList
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onItemEdited={onItemEdited}
          onToggleTimerButton={onToggleTimerButton}
        />
        <Footer toDo={todoCount} done={doneCount} onFilter={onFilter} term={filter} clear={clearCompleted} />
      </section>
    </section>
  );
};

export default App;

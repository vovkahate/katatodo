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

  const createTaskItem = (label, minutes, seconds) => {
    const timeInSeconds = Number(minutes) * 60 + Number(seconds);

    return {
      label,
      id: uuidv4(),
      done: false,
      date: Date.now(),
      timerButton: false,
      seconds: timeInSeconds,
      buttonTime: '',
    };
  };

  useEffect(() => {
    const timers = [];

    taskData.forEach((item) => {
      if (item.timerButton && item.seconds > 0) {
        const timer = setInterval(() => {
          setTaskData((prevTaskData) => {
            return prevTaskData.map((taskItem) => {
              if (taskItem.id === item.id) {
                return { ...taskItem, seconds: taskItem.seconds - 1 };
              }
              return taskItem;
            });
          });
        }, 1000);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [taskData]);

  const handleTimerButton = (id) => {
    setTaskData((prevTaskData) => {
      return prevTaskData.map((item) => {
        if (item.id === id) {
          if (!item.timerButton) {
            return { ...item, timerButton: true, buttonTime: Date.now() };
          } else {
            return { ...item, timerButton: false };
          }
        }
        return item;
      });
    });
  };

  const deleteItem = (id, label) => {
    if (window.confirm(`Are you sure to delete task "${label}" ?`)) {
      setTaskData((prevTaskData) => prevTaskData.filter((el) => el.id !== id));
    }
  };

  const addItem = (text, minutes = 0, seconds = 0) => {
    if (text === '' || text.replaceAll(' ', '').length === 0) {
      return;
    } else {
      const newItem = createTaskItem(text.trim(), minutes, seconds);
      setTaskData((prevTaskData) => [...prevTaskData, newItem]);
    }
  };

  const onToggleDone = (id) => {
    setTaskData((prevTaskData) => {
      return prevTaskData.map((item) => {
        if (item.id === id) {
          if (item.timerButton) {
            return { ...item, timerButton: false, done: !item.done };
          } else return { ...item, done: !item.done };
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
          handleTimerButton={handleTimerButton}
        />
        <Footer toDo={todoCount} done={doneCount} onFilter={onFilter} term={filter} clear={clearCompleted} />
      </section>
    </section>
  );
};

export default App;

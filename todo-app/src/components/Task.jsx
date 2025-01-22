import { useEffect, useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Task = () => {
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage or set an empty array
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  //   if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }, []);

  return (
    <div className='max-w-lg text-center mx-auto my-8'>
      <h1 className='mb-10'>To-Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Task;

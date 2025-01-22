import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className='mb-4'>
      <input
        className='rounded-md mr-2 px-2 pt-3 pb-2 w-80 text-lg text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        className='rounded-full bg-green-700 px-2 pt-2 pb-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-offset-2 focus focus-visible:outline-green-600'
        onClick={handleAddTask} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>


      </button>
    </div>
  );
};

export default TaskInput;

import { useState } from "react";
import TaskItem from "./TaskItem";
import InputArea from "./InputArea";

export default function App() {
  const [items, setItems] = useState([]);

  function addTask(inputText) {
    setItems((prevTasks) => [...prevTasks, inputText]);
  }

  function deleteTask(id) {
    setItems((prevTasks) => prevTasks.filter((item, index) => index !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">To-Do List </h1>
      <p className="text-lg mb-4">Keep track of your tasks</p>    
      <InputArea onAdd={addTask} />

      <ul className="mt-6 w-full max-w-md space-y-2">
        {items.map((taskItem, index) => (
          <TaskItem
            key={index}
            id={index}
            text={taskItem}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}


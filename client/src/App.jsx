import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import InputArea from "./InputArea";

export default function App() {
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get("http://localhost:3000/"); 
        
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchTasks();
  }, []);

  async function addTask(inputText) {
  if (!inputText) return;
  try {
    const response = await axios.post("http://localhost:3000/tasks", { 
      text: inputText, 
      completed: false 
    });
    setItems((prevTasks) => [...prevTasks, response.data]);
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

  
async function deleteTask(id) {
  try {
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    setItems((prevTasks) => prevTasks.filter((item) => item.id !== id));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}


  async function checkedTask(id) {
  try {
    const task = items.find((item) => item.id === id);
    if (!task) return;

    const updatedTask = { 
      ...task, 
      completed: !task.completed 
    };

    const response = await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);

    setItems((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? response.data : task
      )
    );
  } catch (error) {
    console.error('Error updating task:', error);
  }
}

  return (
    <div
      style={{
        backgroundColor: "#e4e9fd",
        backgroundImage: "linear-gradient(65deg, #a683e3 50%, #e4e9fd 50%)",
        minHeight: "1000px",
        fontFamily: '"helvetica neue", sans-serif',
      }}
      className="text-white flex flex-col items-center p-6"
    >
      <h1 className="text-4xl font-bold mb-6">To-Do List </h1>
      <p className="text-lg mb-4">Keep track of your tasks</p>
      <InputArea onAdd={addTask} />

      <ul className="mt-6 w-full max-w-md space-y-2">
  {items.map((taskItem) => (
    <li key={taskItem.id}>
      <TaskItem
        id={taskItem.id}            
        text={taskItem.text}
        completed={taskItem.completed}
        onDelete={deleteTask}
        onCheck={checkedTask}
      />
    </li>
  ))}
</ul>

    </div>
  );
}

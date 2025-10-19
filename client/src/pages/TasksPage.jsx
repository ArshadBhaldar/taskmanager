import { useState } from "react";

// Example data, ideally fetched from backend/database.
const initialTasks = {
  Work: [
    { text: "Finalize Q3 Marketing Report", completed: false },
    { text: "Prepare for client presentation next week", completed: false },
    { text: "Update project budget and reforecast Q4 expenses", completed: false },
    { text: "Schedule team sync-up on new feature development", completed: true },
    { text: "Research market trends for product improvement", completed: false },
    { text: "Develop new outreach strategy", completed: false },
  ],
  Study: [
    { text: "Complete Chapter 5 for Algorithms course", completed: false },
    { text: "Write essay for Literature class (due Friday)", completed: false },
    { text: "Prepare for Chemistry lab exam", completed: true },
    { text: "Review React components for project submission", completed: false },
  ],
  Personal: [
    { text: "Plan weekend trip to the mountains", completed: false },
    { text: "Go grocery shopping for the week", completed: false },
    { text: "Call family to catch up", completed: false },
    { text: "Exercise for 30 minutes", completed: true },
    { text: "Organize digital photos from last vacation", completed: false },
  ],
};

function CategoryIcon({ name }) {
  // Replace with SVGs/icons for each category if desired
  const icons = {
    Work: (
      <span role="img" aria-label="Work" className="text-blue-500 mr-2">
        📁
      </span>
    ),
    Study: (
      <span role="img" aria-label="Study" className="text-green-500 mr-2">
        📚
      </span>
    ),
    Personal: (
      <span role="img" aria-label="Personal" className="text-pink-500 mr-2">
        🏠
      </span>
    ),
  };
  return icons[name] || null;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  // Handler to toggle a task's completed state
  function handleTaskToggle(category, idx) {
    setTasks((prev) => {
      const updatedList = [...prev[category]];
      updatedList[idx] = { ...updatedList[idx], completed: !updatedList[idx].completed };
      return { ...prev, [category]: updatedList };
    });
  }

  // Handler to add a new task (example implementation)
  function handleAddTask(category) {
    const desc = prompt("Enter new task description:");
    if (desc) {
      setTasks((prev) => ({
        ...prev,
        [category]: [...prev[category], { text: desc, completed: false }],
      }));
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar is assumed to be in App Layout */}
      <main className="flex-1 px-12 py-10">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Daily Tasks</h1>
            <p className="text-gray-500 text-lg">
              Stay organized and conquer your goals one task at a time.
            </p>
          </div>
          {/* Add search/profile actions here if needed */}
          <div className="flex items-center gap-6">
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700"
              title="Search"
            >
              <span role="img" aria-label="Search">🔍</span>
            </button>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 border"
            />
          </div>
        </header>
        {/* Three column grid for each category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(tasks).map((category) => (
            <section key={category} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-xl font-semibold">
                  <CategoryIcon name={category} />
                  {category} <span className="ml-2 text-gray-400 text-base">({tasks[category].length})</span>
                </div>
                <button
                  className="text-2xl text-gray-300 hover:text-gray-500 px-2 rounded transition"
                  title={`Add new ${category} task`}
                  onClick={() => handleAddTask(category)}
                >
                  +
                </button>
              </div>
              <ul className="space-y-3">
                {tasks[category].map((task, idx) => (
                  <li key={idx}>
                    <div
                      className={`flex items-center px-4 py-3 rounded-lg border bg-gray-50
                        ${task.completed ? "opacity-70" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleTaskToggle(category, idx)}
                        className="mr-4 accent-blue-600 h-4 w-4"
                      />
                      <span
                        className={`flex-grow text-base ${
                          task.completed ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {task.text}
                      </span>
                      {/* Optional: Button for subtask details */}
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="View details">
                        ▼
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

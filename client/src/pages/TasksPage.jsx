import { useState } from "react";

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
  const icons = {
    Work: <span className="text-blue-500 mr-1 text-2xl">📁</span>,
    Study: <span className="text-green-500 mr-1 text-2xl">📚</span>,
    Personal: <span className="text-pink-500 mr-1 text-2xl">🏠</span>,
  };
  return icons[name] || null;
}

const panelStyles = {
  Work: 'bg-gradient-to-tr from-blue-100 via-blue-50 to-white border-l-8 border-blue-300',
  Study: 'bg-gradient-to-tr from-green-100 via-green-50 to-white border-l-8 border-green-300',
  Personal: 'bg-gradient-to-tr from-pink-100 via-pink-50 to-white border-l-8 border-pink-300'
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleTaskToggle(category, idx) {
    setTasks(prev => {
      const updatedList = [...prev[category]];
      updatedList[idx] = { ...updatedList[idx], completed: !updatedList[idx].completed };
      return { ...prev, [category]: updatedList };
    });
  }

  function handleAddTask(category) {
    const desc = prompt("Enter new task description:");
    if (desc) {
      setTasks(prev => ({
        ...prev,
        [category]: [...prev[category], { text: desc, completed: false }],
      }));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-screen-2xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-2 tracking-tight drop-shadow">Your Daily Tasks</h1>
          <p className="text-lg text-blue-600 font-medium">Stay organized and conquer your goals one task at a time.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {Object.keys(tasks).map(category => (
            <section
              key={category}
              className={`rounded-2xl shadow-lg p-7 ${panelStyles[category]} relative`}
            >
              <div className="absolute right-4 top-6 opacity-10 text-7xl font-bold pointer-events-none select-none">
                {category === "Work" && "📈"}
                {category === "Study" && "🧑‍🎓"}
                {category === "Personal" && "🏃"}
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-2xl font-bold drop-shadow">
                  <CategoryIcon name={category} />
                  <span className={`mr-2 ${category === "Work" ? "text-blue-700" : category === "Study" ? "text-green-700" : "text-pink-700"}`}>{category}</span>
                  <span className="ml-2 px-3 py-0.5 bg-gray-200 rounded-full text-base text-gray-700 font-semibold border">{tasks[category].length}</span>
                </div>
                <button
                  className={`shadow text-2xl rounded-full font-extrabold px-3 py-1 bg-white border ${category === "Work" ? "border-blue-300 text-blue-600" : category === "Study" ? "border-green-300 text-green-600" : "border-pink-300 text-pink-600"} hover:bg-gradient-to-r hover:from-purple-200 hover:to-blue-200 transition`}
                  title={`Add new ${category} task`}
                  onClick={() => handleAddTask(category)}
                >+</button>
              </div>
              <ul className="space-y-4">
                {tasks[category].map((task, idx) => (
                  <li key={idx}>
                    <div
                      className={`flex items-center px-5 py-4 rounded-xl shadow border bg-white/80 backdrop-blur-lg
                        hover:bg-opacity-90 transition ${task.completed ? "opacity-60" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleTaskToggle(category, idx)}
                        className={`mr-4 accent-${category === "Work" ? "blue" : category === "Study" ? "green" : "pink"}-600 h-5 w-5 rounded-full shadow`}
                      />
                      <span
                        className={`flex-grow text-lg font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-900"}`}
                      >
                        {task.text}
                      </span>
                      <button
                        className="ml-2 text-gray-400 hover:text-purple-600 p-1 rounded transition"
                        title="View details"
                      >▼</button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

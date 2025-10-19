import { useState } from "react";

const syllabusData = [
  {
    title: "Introduction to React Hooks",
    progress: 75,
    expanded: true,
    topics: [
      {
        title: "Understanding useState",
        description: "Learn about managing state in functional components.",
        completed: true,
      },
      {
        title: "Deep Dive into useEffect",
        description: "Explore side effects and lifecycle methods with useEffect.",
        completed: true,
      },
      {
        title: "Context API with useContext",
        description: "Share state across components without prop-drilling.",
        completed: false,
      },
    ]
  },
  {
    title: "Advanced TypeScript Patterns",
    progress: 40,
    expanded: false,
    topics: [],
  },
  {
    title: "Modern CSS Techniques",
    progress: 20,
    expanded: false,
    topics: [],
  },
];

const sampleQnA = [
  {
    type: "user",
    text: "Can you explain the difference between `useState` and `useReducer`?",
  },
  {
    type: "ai",
    text: "`useState` is for simple state management, while `useReducer` is better for complex state logic, especially when state transitions are intricate or involve multiple sub-values. It also helps with performance optimizations in some cases.",
  },
  {
    type: "user",
    text: "How do I implement a custom debounce hook in React?",
  }
];

export default function FocusProgressPage() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState("ready");

  const [syllabus, setSyllabus] = useState(syllabusData);
  const overallProgress = (
    syllabus.reduce((sum, s) => sum + s.progress, 0) / syllabus.length
  );

  const [input, setInput] = useState("");
  const [qna, setQna] = useState(sampleQnA);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar is assumed in main layout */}
      <main className="flex-1 px-12 py-10">
        <h1 className="text-3xl font-bold mb-6">Focus & Progress Dashboard</h1>
        {/* Top Panel: Pomodoro Timer & Syllabus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Pomodoro Timer */}
          <section className="bg-white rounded-xl shadow p-7 flex flex-col items-center">
            <div className="flex flex-col items-center mb-3 w-full">
              <div className="text-lg font-semibold">Pomodoro Timer</div>
              <span className="bg-blue-100 text-blue-600 py-0.5 px-3 rounded-full text-xs font-medium my-2">
                Focus
              </span>
            </div>
            <input
              className="border w-full rounded px-2 py-1 mb-3 text-center"
              placeholder="Current Task Focus e.g., Q3 Report Analysis"
            />
            <div className="text-6xl font-bold text-blue-700 mb-4">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
            <div className="flex gap-3 mb-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">Start</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded font-medium">Pause</button>
              <button className="px-4 py-2 bg-red-400 text-white rounded font-medium">Reset</button>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Work: 25 min | Short Break: 5 min | Long Break: 15 min
            </div>
          </section>
          {/* Syllabus Progress */}
          <section className="bg-white rounded-xl shadow p-7">
            <div className="mb-4 font-semibold text-lg">Syllabus Progress</div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
              <div
                className="h-2 bg-purple-600 rounded-full"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mb-4">Overall Progress {Math.round(overallProgress)}%</div>
            <div className="space-y-4">
              {syllabus.map((s, idx) => (
                <div key={s.title} className="mb-1 transition">
                  <div className="flex items-center justify-between cursor-pointer group">
                    <div>
                      <span className="font-medium">{s.title}</span>
                      <span className="bg-purple-100 text-purple-700 ml-3 text-xs font-bold px-2 py-0.5 rounded">{s.progress}%</span>
                    </div>
                    <button
                      className="text-lg text-gray-400 group-hover:text-gray-600"
                      onClick={() =>
                        setSyllabus(prev => prev.map((item, id) =>
                          id === idx ? { ...item, expanded: !item.expanded } : item
                        ))
                      }
                      title="Expand/collapse"
                    >{s.expanded ? "▲" : "▼"}</button>
                  </div>
                  {/* Topics */}
                  {s.expanded && s.topics.length > 0 && (
                    <div className="ml-5 mt-2">
                      {s.topics.map((t, i) => (
                        <div key={i} className="flex items-center mb-1">
                          <input type="checkbox" className="mr-2 accent-purple-600" checked={t.completed} readOnly />
                          <div>
                            <span
                              className={`font-medium ${
                                t.completed ? "text-gray-400 line-through" : ""
                              }`}
                            >
                              {t.title}
                            </span>
                            <span className="block text-xs text-gray-500 ml-2">{t.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Explain-to-Me Assistant Panel */}
        <section className="bg-white rounded-xl shadow p-7">
          <div className="font-semibold text-lg mb-3">Explain-to-Me Assistant</div>
          <div className="mb-4 text-gray-500 text-sm">Ask anything about your syllabus or tasks!</div>
          <div className="bg-gray-100 min-h-[120px] p-4 rounded-lg mb-3">
            {qna.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded px-3 py-2 max-w-xl text-sm shadow-sm ${
                    msg.type === "user"
                      ? "bg-purple-50 text-purple-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              className="flex-1 border rounded-l px-3 py-2 focus:ring focus:outline-none"
              placeholder="Type your question here..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              className="px-5 bg-purple-600 text-white rounded-r font-medium hover:bg-purple-700"
              onClick={() => {
                if(!input.trim()) return;
                setQna(prev => [...prev, { type: "user", text: input }]);
                setInput("");
                // Here you would call your backend/AI for a response and add it to qna.
              }}
            >
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

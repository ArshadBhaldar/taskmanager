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
    ],
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
    text: "`useState` is for simple state management, while `useReducer` is better for complex state logic or multiple interacting state variables.",
  },
  {
    type: "user",
    text: "How do I implement a custom debounce hook in React?",
  },
];

export default function FocusProgressPage() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [syllabus, setSyllabus] = useState(syllabusData);
  const [input, setInput] = useState("");
  const [qna, setQna] = useState(sampleQnA);

  const overallProgress = (
    syllabus.reduce((sum, s) => sum + s.progress, 0) / syllabus.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-blue-50 py-12">
      <main className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-10 drop-shadow">
          Focus & Progress Dashboard
        </h1>

        {/* Pomodoro + Syllabus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Pomodoro */}
          <section className="bg-white/80 backdrop-blur-lg border-l-8 border-blue-300 shadow-lg rounded-2xl p-7 flex flex-col items-center relative">
            <div className="absolute right-6 top-6 opacity-5 text-8xl text-blue-400 pointer-events-none">
              ⏱️
            </div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Pomodoro Timer</h2>
            <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Focus Mode
            </div>

            <input
              className="border-2 border-blue-200 focus:ring-blue-400 w-full rounded-lg px-3 py-2 mb-3 text-center shadow-inner"
              placeholder="Current Task (e.g., React Hooks Practice)"
            />
            <div className="text-6xl font-extrabold text-blue-700 mb-4 tracking-wide">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
            <div className="flex gap-4 mb-2">
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
                Start
              </button>
              <button className="px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
                Pause
              </button>
              <button className="px-5 py-2 bg-red-400 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
                Reset
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Work: 25m | Short Break: 5m | Long Break: 15m
            </p>
          </section>

          {/* Syllabus Progress */}
          <section className="bg-white/80 backdrop-blur-lg border-l-8 border-purple-300 shadow-lg rounded-2xl p-7 relative">
            <div className="absolute right-6 top-6 opacity-5 text-8xl text-purple-400 pointer-events-none">
              📚
            </div>
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Syllabus Progress
            </h2>
            <div className="w-full h-3 bg-gray-200 rounded-full mb-3 overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Overall Progress: {Math.round(overallProgress)}%
            </p>

            <div className="space-y-5">
              {syllabus.map((s, idx) => (
                <div
                  key={s.title}
                  className="bg-white/70 rounded-lg p-3 border shadow-sm"
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <div>
                      <span className="font-medium text-purple-700">{s.title}</span>
                      <span className="ml-3 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs">
                        {s.progress}%
                      </span>
                    </div>
                    <button
                      className="text-lg text-gray-400 hover:text-purple-600 transition"
                      onClick={() =>
                        setSyllabus((prev) =>
                          prev.map((item, i) =>
                            i === idx
                              ? { ...item, expanded: !item.expanded }
                              : item
                          )
                        )
                      }
                    >
                      {s.expanded ? "▲" : "▼"}
                    </button>
                  </div>

                  {s.expanded && s.topics.length > 0 && (
                    <div className="ml-5 mt-2 space-y-2">
                      {s.topics.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-start bg-purple-50 rounded-lg p-2"
                        >
                          <input
                            type="checkbox"
                            checked={t.completed}
                            className="mr-2 mt-1 accent-purple-600"
                            readOnly
                          />
                          <div>
                            <p
                              className={`font-medium text-sm ${
                                t.completed
                                  ? "line-through text-gray-400"
                                  : "text-gray-800"
                              }`}
                            >
                              {t.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {t.description}
                            </p>
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

        {/* Explain-to-Me Assistant */}
        <section className="bg-white/80 backdrop-blur-lg border-l-8 border-indigo-300 shadow-lg rounded-2xl p-8 relative">
          <div className="absolute right-6 top-6 opacity-5 text-8xl text-indigo-400 pointer-events-none">
            🤖
          </div>
          <h2 className="text-xl font-bold text-indigo-700 mb-2">
            Explain-to-Me Assistant
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Ask interactive questions related to your ongoing topics or tasks!
          </p>

          <div className="bg-gray-100/90 p-4 rounded-lg mb-4 space-y-2 overflow-auto max-h-72">
            {qna.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg shadow-sm max-w-lg text-sm ${
                    msg.type === "user"
                      ? "bg-indigo-100 text-indigo-800"
                      : "bg-purple-50 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              className="flex-1 border-2 border-indigo-200 rounded-l-lg px-3 py-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="px-6 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700 transition"
              onClick={() => {
                if (!input.trim()) return;
                setQna((prev) => [...prev, { type: "user", text: input }]);
                setInput("");
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

export default function LowerPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Recent Journal Entry */}
      <div className="bg-cyan-50 rounded-xl shadow-lg p-6 border-l-8 border-cyan-300 flex flex-col">
        <h3 className="font-semibold text-cyan-700 mb-2">📓 Recent Journal Entry</h3>
        <p className="text-sm text-cyan-900">
          Today was a breakthrough day for my React project! I finally figured out the authentication flow after struggling for days. The feeling of accomplishment is immense. Remember to celebrate these small wins.
        </p>
      </div>

      {/* Quick Notes */}
      <div className="bg-orange-50 rounded-xl shadow-lg p-6 border-l-8 border-orange-300 flex flex-col">
        <h3 className="font-semibold text-orange-800 mb-2">📝 Quick Notes</h3>
        <ul className="text-sm list-disc ml-5 text-orange-900 space-y-1">
          <li>Remember to pick up groceries after work.</li>
          <li>Team meeting at 10 AM tomorrow, prepare agenda.</li>
          <li>Brainstorm ideas for blog post on “Mindful Productivity.”</li>
        </ul>
      </div>

      {/* Productivity Hub */}
      <div className="bg-purple-50 rounded-xl shadow-lg p-6 border-l-8 border-purple-300 flex flex-col items-center">
        <h3 className="font-semibold text-purple-700 mb-2">🎯 Productivity Hub</h3>
        <div className="mb-2 text-gray-900 font-bold text-2xl">Focus</div>
        <div className="flex gap-3 mb-3">
          <button className="px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold rounded shadow hover:scale-110 transition">
            Start
          </button>
          <button className="px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded hover:bg-blue-200 transition">
            Pause
          </button>
          <button className="px-3 py-1 bg-pink-200 text-pink-700 font-semibold rounded hover:bg-pink-300 transition">
            Reset
          </button>
        </div>
        <div className="mt-3 w-full">
          <span className="text-xs uppercase tracking-wide font-semibold text-purple-600">Syllabus Progress</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-purple-900">Math 101</span>
            <span className="font-bold text-purple-600 text-sm">75%</span>
          </div>
          <div className="h-3 bg-purple-100 rounded-full mb-2 w-full">
            <div className="bg-gradient-to-r from-purple-600 to-blue-400 h-3 rounded-full" style={{ width: "75%" }} />
          </div>

          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-purple-900">Physics 202</span>
            <span className="font-bold text-purple-600 text-sm">50%</span>
          </div>
          <div className="h-3 bg-purple-100 rounded-full mb-2 w-full">
            <div className="bg-gradient-to-r from-blue-400 to-purple-600 h-3 rounded-full" style={{ width: "50%" }} />
          </div>
        </div>
      </div>

      {/* Daily Productivity Trend */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 col-span-2 border-l-8 border-blue-200 mt-8">
        <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
          📊 Daily Productivity Trend
        </h3>
        <img
          src="https://dummyimage.com/320x120/bae6fd/312e81&text=Chart+Placeholder"
          alt="Chart"
          className="rounded shadow"
        />
      </div>

      {/* Task Completion by Category */}
      <div className="bg-green-50 rounded-xl shadow-lg p-6 border-l-8 border-green-300 mt-8">
        <h3 className="font-semibold text-green-700 mb-2 flex items-center">
          🟩 Task Completion by Category
        </h3>
        <img
          src="https://dummyimage.com/180x100/b6f5d8/166534&text=Bar+Chart"
          alt="Bar Chart"
          className="rounded shadow"
        />
      </div>

      {/* AI Assistant */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-lg p-6 col-span-3 mt-8 border-l-8 border-blue-300">
        <h3 className="font-bold text-xl mb-3 text-blue-700 flex items-center">
          🤖 AI Assistant
        </h3>
        <div className="flex flex-col gap-2">
          <div className="bg-white/60 px-4 py-2 rounded-xl shadow-sm text-purple-800 max-w-lg">
            Hello! How can I assist you with your dashboard today?
          </div>
          <div className="bg-blue-100 px-4 py-2 rounded-xl self-end shadow-sm text-blue-800 max-w-lg">
            Can you explain my "Daily Productivity Trend" chart?
          </div>
          <div className="bg-white/60 px-4 py-2 rounded-xl shadow-sm text-purple-800 max-w-lg">
            Certainly! The Daily Productivity Trend shows your focus time and completed tasks over the last 7 days. Higher bars indicate more productive days.
          </div>
        </div>
        <input
          className="mt-5 w-full border-2 border-blue-200 bg-white/40 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Ask the assistant..."
        />
      </div>
    </div>
  );
}

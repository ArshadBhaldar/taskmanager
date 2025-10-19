export default function LowerPanel() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Recent Journal Entry */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-semibold mb-2">Recent Journal Entry</h3>
        <p className="text-sm">
          Today was a breakthrough day for my React project! I finally figured out the authentication flow after struggling for days. The feeling of accomplishment is immense. Remember to celebrate these small wins.
        </p>
      </div>

      {/* Quick Notes */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-semibold mb-2">Quick Notes</h3>
        <ul className="text-sm list-disc ml-4">
          <li>Remember to pick up groceries after work.</li>
          <li>Team meeting at 10 AM tomorrow, prepare agenda.</li>
          <li>Brainstorm ideas for blog post on “Mindful Productivity.”</li>
        </ul>
      </div>

      {/* Productivity Hub (Pomodoro) */}
      <div className="bg-white rounded shadow p-4 flex flex-col items-center">
        <h3 className="font-semibold mb-2">Productivity Hub</h3>
        <div className="mb-2 text-gray-700 font-bold text-2xl">Focus</div>
        <div className="flex gap-3">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">Start</button>
          <button className="px-3 py-1 bg-gray-300 rounded">Pause</button>
          <button className="px-3 py-1 bg-gray-300 rounded">Reset</button>
        </div>
        <div className="mt-3 w-full">
          <div className="text-sm font-medium">Syllabus Progress</div>
          <div className="my-1 flex items-center justify-between">
            <span>Math 101</span>
            <span className="font-bold text-blue-500">75%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 mb-1 w-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }} />
          </div>
          <div className="flex items-center justify-between">
            <span>Physics 202</span>
            <span className="font-bold text-blue-500">50%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 mb-1 w-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "50%" }} />
          </div>
        </div>
      </div>

      {/* Analytics - Daily Productivity Trend */}
      <div className="bg-white rounded shadow p-4 col-span-2">
        <h3 className="font-semibold mb-2">Daily Productivity Trend</h3>
        <img src="https://dummyimage.com/300x100/eee/aaa&text=Chart+Placeholder" alt="Chart" />
      </div>

      {/* Analytics - Task Completion by Category */}
      <div className="bg-white rounded shadow p-4">
        <h3 className="font-semibold mb-2">Task Completion by Category</h3>
        <img src="https://dummyimage.com/200x100/eee/aaa&text=Bar+Chart" alt="Bar Chart" />
      </div>

      {/* AI Assistant */}
      <div className="bg-white rounded shadow p-4 col-span-3 mt-4">
        <h3 className="font-semibold mb-2">AI Assistant</h3>
        <div className="flex flex-col gap-2">
          <div className="bg-gray-100 rounded px-3 py-2">Hello! How can I assist you with your dashboard today?</div>
          <div className="bg-blue-100 rounded px-3 py-2 self-end">Can you explain my "Daily Productivity Trend" chart?</div>
          <div className="bg-gray-100 rounded px-3 py-2">Certainly! The Daily Productivity Trend shows your focus time and completed tasks over the last 7 days. Higher bars indicate more productive days.</div>
        </div>
        <input
          className="mt-3 w-full border rounded px-3 py-2"
          placeholder="Ask the assistant..."
        />
      </div>
    </div>
  );
}

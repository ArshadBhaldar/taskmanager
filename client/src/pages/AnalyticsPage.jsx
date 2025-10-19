export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar assumed in layout */}
      <main className="flex-1 px-12 py-10">
        <h1 className="text-2xl font-bold mb-6">Productivity Overview</h1>
        {/* Top charts: Focus/Break + Streak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Focus & Break */}
          <section className="bg-white rounded-xl shadow p-7 flex flex-col">
            <h2 className="font-semibold mb-3 text-lg">Daily Focus & Break</h2>
            <div className="mb-3 text-sm text-gray-500">Focus and break time over the past week in minutes.</div>
            {/* Chart visual */}
            <svg className="w-full" height="180" viewBox="0 0 350 180">
              {/* Bar charts placeholder */}
              <rect x="20" y="40" width="20" height="100" fill="#7c3aed" />
              <rect x="50" y="80" width="20" height="60" fill="#f472b6" />
              <rect x="80" y="30" width="20" height="110" fill="#7c3aed" />
              <rect x="110" y="110" width="20" height="30" fill="#f472b6" />
              <rect x="140" y="60" width="20" height="80" fill="#7c3aed" />
              {/* ...repeat as needed */}
              <text x="20" y="160" fontSize="12">Mon</text>
              <text x="80" y="160" fontSize="12">Tue</text>
              <text x="140" y="160" fontSize="12">Wed</text>
              {/* legend */}
              <circle cx="220" cy="160" r="6" fill="#7c3aed" />
              <text x="230" y="165" fontSize="12">Focus Time (min)</text>
              <circle cx="320" cy="160" r="6" fill="#f472b6" />
              <text x="330" y="165" fontSize="12">Break Time (min)</text>
            </svg>
            <div className="mt-3 text-xs text-gray-400">
              Total focus time: 15 hours, total break time: 3.5 hours
            </div>
          </section>
          {/* Consistency Streak */}
          <section className="bg-white rounded-xl shadow p-7 flex flex-col">
            <h2 className="font-semibold mb-3 text-lg">Consistency Streak</h2>
            <div className="text-5xl text-blue-700 font-bold mb-2">7 Days</div>
            <div className="mb-3 text-blue-700 font-medium">Current Streak</div>
            <div className="flex gap-2 mb-2">
              {[1,2,3,4,5,6,7].map(day => (
                <div key={day} className="h-14 w-8 bg-purple-300 rounded flex items-end justify-center">
                  <div className="w-6 h-10 bg-purple-500 rounded"></div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-400">
              Keep up the great work towards your goals!
            </div>
          </section>
        </div>
        {/* Lower charts: Task Status + Mood Trend */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task Status */}
          <div className="bg-white rounded-xl shadow p-7 flex flex-col items-center">
            <h2 className="font-semibold mb-3 text-lg">Task Status</h2>
            <div className="mb-6 text-sm text-gray-500">Distribution of your tasks by status.</div>
            {/* Pie chart placeholder */}
            <svg className="w-40 h-40 mb-2">
              <circle cx="80" cy="80" r="70" fill="#e5e7eb" />
              <path d="M80,80 L80,10 A70,70 0 0,1 140,120 Z" fill="#7c3aed" />
              <path d="M80,80 L140,120 A70,70 0 0,1 80,150 Z" fill="#f472b6" />
              <path d="M80,80 L80,150 A70,70 0 0,1 80,10 Z" fill="#6366f1" />
            </svg>
            <div className="flex gap-3 text-xs mt-2">
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-600 mr-1"></span>Completed
              </span>
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-pink-400 mr-1"></span>Active
              </span>
              <span className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-indigo-400 mr-1"></span>Pending
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500">Total tasks: 100</div>
          </div>
          {/* Weekly Mood Trend */}
          <div className="bg-white rounded-xl shadow p-7 flex flex-col">
            <h2 className="font-semibold mb-3 text-lg">Weekly Mood Trend</h2>
            <div className="mb-4 text-sm text-gray-500">
              Your average self-reported mood score over the past week.
            </div>
            {/* Line chart placeholder */}
            <svg className="w-full h-28">
              <polyline
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
                points="10,70 60,40 120,60 180,30 240,50 300,45 350,60"
              />
              {/* x-axis labels */}
              <text x="10" y="90" fontSize="12">Mon</text>
              <text x="60" y="90" fontSize="12">Tue</text>
              <text x="120" y="90" fontSize="12">Wed</text>
              <text x="180" y="90" fontSize="12">Thu</text>
              <text x="240" y="90" fontSize="12">Fri</text>
              <text x="300" y="90" fontSize="12">Sat</text>
              <text x="350" y="90" fontSize="12">Sun</text>
            </svg>
            <div className="mt-2 text-xs text-gray-400">
              Average mood this week: 4.0/5
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

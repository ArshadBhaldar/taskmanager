export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 p-12">
      {/* Sidebar assumed in layout */}
      <main className="flex-1 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8">
          Productivity Overview
        </h1>

        {/* Top Charts: Focus/Break + Streak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Daily Focus & Break */}
          <section className="bg-white/90 rounded-2xl shadow-lg p-8 border-l-8 border-indigo-500 flex flex-col">
            <h2 className="font-semibold mb-4 text-xl text-indigo-700">Daily Focus & Break</h2>
            <p className="mb-5 text-gray-600 text-sm">Focus and break time over the past week in minutes.</p>
            <svg className="w-full" height="180" viewBox="0 0 350 180" aria-label="Daily Focus and Break Chart">
              {/* Focus bars */}
              <rect x="20" y="40" width="20" height="100" fill="#6366f1" rx="3" />
              <rect x="50" y="80" width="20" height="60" fill="#ec4899" rx="3" />
              <rect x="80" y="30" width="20" height="110" fill="#6366f1" rx="3" />
              <rect x="110" y="110" width="20" height="30" fill="#ec4899" rx="3" />
              <rect x="140" y="60" width="20" height="80" fill="#6366f1" rx="3" />
              {/* Labels */}
              <text x="20" y="160" fontSize="14" fill="#4b5563">Mon</text>
              <text x="80" y="160" fontSize="14" fill="#4b5563">Tue</text>
              <text x="140" y="160" fontSize="14" fill="#4b5563">Wed</text>
              {/* Legend */}
              <circle cx="230" cy="160" r="7" fill="#6366f1" />
              <text x="245" y="165" fontSize="14" fill="#4b5563">
                Focus Time (min)
              </text>
              <circle cx="320" cy="160" r="7" fill="#ec4899" />
              <text x="335" y="165" fontSize="14" fill="#4b5563">
                Break Time (min)
              </text>
            </svg>
            <p className="mt-4 text-xs text-gray-400">
              Total focus time: 15 hours, total break time: 3.5 hours
            </p>
          </section>

          {/* Consistency Streak */}
          <section className="bg-white/90 rounded-2xl shadow-lg p-8 border-l-8 border-purple-500 flex flex-col">
            <h2 className="font-semibold mb-4 text-xl text-purple-700">Consistency Streak</h2>
            <div className="text-6xl text-purple-600 font-extrabold mb-4">7 Days</div>
            <p className="text-purple-600 mb-6 text-lg font-semibold">Current Streak</p>
            <div className="flex gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className="h-16 w-10 bg-purple-300 rounded flex items-end justify-center"
                >
                  <div className="w-8 h-12 bg-purple-600 rounded"></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Keep up the great work towards your goals!
            </p>
          </section>
        </div>

        {/* Bottom Charts: Task Status + Weekly Mood */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Task Status Pie Chart */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-8 border-pink-500">
            <h2 className="font-semibold mb-6 text-xl text-pink-600">Task Status</h2>
            <p className="mb-8 text-gray-600 text-center text-sm max-w-xs">
              Distribution of your tasks by status.
            </p>
            <svg className="w-40 h-40" aria-label="Task Status Pie Chart" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="#f3f4f6" />
              <path d="M80 80 L80 10 A70 70 0 0 1 140 120 Z" fill="#9333ea" />
              <path d="M80 80 L140 120 A70 70 0 0 1 80 150 Z" fill="#ec4899" />
              <path d="M80 80 L80 150 A70 70 0 0 1 80 10 Z" fill="#a78bfa" />
            </svg>
            <div className="flex gap-6 mt-5 text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-700 rounded-full"></div> Completed
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div> Active
              </span>
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div> Pending
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-500">Total tasks: 100</p>
          </div>

          {/* Weekly Mood Trend Line Chart */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border-l-8 border-blue-500">
            <h2 className="font-semibold mb-4 text-xl text-blue-600">Weekly Mood Trend</h2>
            <p className="mb-4 text-gray-600 text-sm">
              Your average self-reported mood score over the past week.
            </p>
            <svg className="w-full h-28" aria-label="Weekly Mood Trend Line Chart">
              <polyline
                fill="none"
                stroke="#4f46e5"
                strokeWidth="4"
                points="10,70 60,40 120,60 180,30 240,50 300,45 350,60"
              />
              <text x="10" y="90" fontSize="12" fill="#6b7280">Mon</text>
              <text x="60" y="90" fontSize="12" fill="#6b7280">Tue</text>
              <text x="120" y="90" fontSize="12" fill="#6b7280">Wed</text>
              <text x="180" y="90" fontSize="12" fill="#6b7280">Thu</text>
              <text x="240" y="90" fontSize="12" fill="#6b7280">Fri</text>
              <text x="300" y="90" fontSize="12" fill="#6b7280">Sat</text>
              <text x="350" y="90" fontSize="12" fill="#6b7280">Sun</text>
            </svg>
            <p className="mt-3 text-xs text-gray-500">Average mood this week: 4.0/5</p>
          </div>
        </section>
      </main>
    </div>
  );
}

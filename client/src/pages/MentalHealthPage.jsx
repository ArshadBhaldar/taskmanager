import { useState } from "react";

export default function MentalHealthPage() {
  const [mood, setMood] = useState(70);
  const [stress, setStress] = useState(4);
  const [breakReminders, setBreakReminders] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar assumed in main layout */}
      <main className="flex-1 px-12 py-10">
        {/* Today's Insight Card */}
        <div className="mb-8">
          <div className="bg-blue-50 rounded-xl p-7 flex flex-col justify-center items-center">
            <div className="text-gray-500 mb-2">Saturday, October 18, 2025</div>
            <div className="text-3xl font-extrabold mb-2">Saturday</div>
            <div className="italic text-gray-700">
              "The best way to predict the future is to create it."
            </div>
          </div>
        </div>

        {/* Wellness & Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7 items-stretch">
          {/* Mood */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold mb-2 flex items-center">
              Current Mood <span className="ml-auto text-blue-400">😃</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Reflect and set your mood for the day.
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={mood}
              onChange={e => setMood(Number(e.target.value))}
              className="w-full accent-blue-500 mb-2"
            />
            <div className="text-blue-700 font-bold text-lg">{mood}%</div>
          </div>
          {/* Stress Level */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold mb-2 flex items-center">
              Stress Level <span className="ml-auto text-blue-400">😰</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Input your perceived stress level (0–10).
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={stress}
              onChange={e => setStress(Number(e.target.value))}
              className="w-full accent-blue-400 mb-2"
            />
            <div className="bg-gray-100 rounded text-xl text-blue-700 font-bold py-2 text-center">{stress}</div>
          </div>
          {/* Break Reminders */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="font-semibold mb-2 flex items-center">
              Break Reminders <span className="ml-auto text-blue-400">🔔</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Stay refreshed with automated break notifications.
            </div>
            <div className="flex items-center">
              <label className="mr-2 text-gray-700">Enable Reminders</label>
              <input
                type="checkbox"
                checked={breakReminders}
                onChange={e => setBreakReminders(e.target.checked)}
                className="accent-blue-500 w-6 h-6"
              />
            </div>
          </div>
        </div>
        {/* Progress, Recommendations, Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {/* Daily Progress */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2 flex items-center">
              Daily Progress <span className="ml-auto text-blue-400">👍</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Overview of your key achievements today.
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <div>Tasks Completed: <span className="font-bold text-blue-600">8</span></div>
              <div>Focus Time: <span className="font-bold text-blue-700">3h 45m</span></div>
              <div>Journal Entries: <span className="font-bold text-blue-500">2</span></div>
            </div>
          </div>
          {/* Mood-Based Recommendations */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2 flex items-center">
              Mood-Based Recommendations <span className="ml-auto text-blue-400">💙</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Personalized activities to uplift your spirits.
            </div>
            <ul className="list-disc ml-5 text-sm">
              <li>Try a 15-minute mindful breathing exercise.</li>
              <li>Listen to calming music during your breaks.</li>
              <li>Spend 10 minutes journaling your thoughts.</li>
            </ul>
          </div>
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2 flex items-center">
              Quick Actions <span className="ml-auto text-blue-400">⚡</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Jump into common wellness activities.
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-blue-50 text-blue-700 rounded py-2 font-semibold hover:bg-blue-100 mb-2">
                Start Journaling
              </button>
              <button className="bg-blue-50 text-blue-700 rounded py-2 font-semibold hover:bg-blue-100 mb-2">
                Begin Focus Session
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

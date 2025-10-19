import { useState } from "react";

export default function MentalHealthPage() {
  const [mood, setMood] = useState(70);
  const [stress, setStress] = useState(4);
  const [breakReminders, setBreakReminders] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 p-10">
      {/* Sidebar assumed in main layout */}
      <main className="flex-1 max-w-7xl mx-auto">
        {/* Today's Insight */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 mb-8 text-center border-l-8 border-blue-400 shadow-lg">
          <p className="text-xs text-gray-500 mb-2">Saturday, October 18, 2025</p>
          <h1 className="font-extrabold text-4xl mb-2 text-blue-700 drop-shadow">Saturday</h1>
          <em className="text-lg text-gray-600">
            "The best way to predict the future is to create it."
          </em>
        </div>

        {/* Wellness & Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Mood */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-blue-400 shadow flex flex-col">
            <header className="font-semibold text-blue-700 mb-3 flex items-center justify-between">
              Current Mood <span className="text-2xl">😃</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">Reflect and set your mood for the day.</p>
            <input
              type="range"
              min="0"
              max="100"
              value={mood}
              onChange={(e) => setMood(Number(e.target.value))}
              className="accent-blue-500 rounded-lg"
            />
            <span className="text-blue-700 font-bold text-xl mt-2">{mood}%</span>
          </section>

          {/* Stress Level */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-indigo-400 shadow flex flex-col">
            <header className="font-semibold text-indigo-700 mb-3 flex items-center justify-between">
              Stress Level <span className="text-2xl">😰</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">
              Input your perceived stress level (0–10).
            </p>
            <input
              type="range"
              min="0"
              max="10"
              value={stress}
              onChange={(e) => setStress(Number(e.target.value))}
              className="accent-indigo-500 rounded-lg"
            />
            <div className="bg-gray-100 rounded-lg text-indigo-700 font-bold py-2 text-center mt-auto text-xl">
              {stress}
            </div>
          </section>

          {/* Break Reminders */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-purple-400 shadow flex flex-col">
            <header className="font-semibold text-purple-700 mb-3 flex items-center justify-between">
              Break Reminders <span className="text-2xl">🔔</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">
              Stay refreshed with automated break notifications.
            </p>
            <label className="flex items-center gap-3 mt-auto cursor-pointer select-none font-semibold text-purple-600">
              <input
                type="checkbox"
                checked={breakReminders}
                onChange={(e) => setBreakReminders(e.target.checked)}
                className="accent-purple-500 w-6 h-6"
              />
              Enable Reminders
            </label>
          </section>
        </div>

        {/* Daily Progress, Recommendations & Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Daily Progress */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-cyan-400 shadow flex flex-col">
            <header className="font-semibold text-cyan-600 mb-3 flex items-center justify-between">
              Daily Progress <span className="text-2xl">👍</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">Overview of your key achievements today.</p>
            <div className="space-y-1 text-sm">
              <div>
                Tasks Completed: <span className="font-bold text-cyan-600">8</span>
              </div>
              <div>
                Focus Time: <span className="font-bold text-cyan-700">3h 45m</span>
              </div>
              <div>
                Journal Entries: <span className="font-bold text-cyan-500">2</span>
              </div>
            </div>
          </section>

          {/* Mood-Based Recommendations */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-pink-400 shadow flex flex-col">
            <header className="font-semibold text-pink-600 mb-3 flex items-center justify-between">
              Mood-Based Recommendations <span className="text-2xl">💙</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">
              Personalized activities to uplift your spirits.
            </p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Try a 15-minute mindful breathing exercise.</li>
              <li>Listen to calming music during your breaks.</li>
              <li>Spend 10 minutes journaling your thoughts.</li>
            </ul>
          </section>

          {/* Quick Actions */}
          <section className="bg-white/70 backdrop-blur-md rounded-xl p-6 border-l-8 border-blue-400 shadow flex flex-col">
            <header className="font-semibold text-blue-600 mb-3 flex items-center justify-between">
              Quick Actions <span className="text-2xl">⚡</span>
            </header>
            <p className="text-sm mb-4 text-gray-600">
              Jump into common wellness activities.
            </p>
            <div className="flex flex-col gap-3">
              <button className="bg-blue-50 text-blue-700 rounded py-2 font-semibold hover:bg-blue-100 transition shadow">
                Start Journaling
              </button>
              <button className="bg-blue-50 text-blue-700 rounded py-2 font-semibold hover:bg-blue-100 transition shadow">
                Begin Focus Session
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default function RightPanel() {
  return (
    <aside className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl px-8 py-8 w-[340px] flex flex-col gap-8 border-l-8 border-purple-300">
      <div>
        <div className="text-md font-bold text-purple-700 mb-2">Saturday, October 18, 2025</div>
        <div className="text-md mb-3">Quote of the Day</div>
        <div className="italic text-gray-700 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 px-5 py-2 rounded-lg mb-2 border">
          "The best way to predict the future is to create it."
        </div>
        <div className="flex items-center gap-2 mb-2 mt-3">
          <span className="text-sm font-medium text-purple-700">Mood Tracker</span>
          <div className="flex gap-1 text-lg">
            <span>😐</span> <span>🙂</span> <span>😊</span> <span>😃</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-sm font-medium text-purple-700">Stress Level</span>
          <input type="range" min="1" max="3" className="w-full accent-purple-400" />
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold mb-1 text-indigo-700">Recommendations</div>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>🧘 Consider a 15-minute mindful walk to refresh your mind.</li>
          <li>🎶 Listen to some calming music.</li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold mb-1 text-pink-700">Daily Stats</div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-600 text-lg">8/12</span>
            <span className="text-gray-500">Tasks Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-indigo-600 text-lg">2.5h</span>
            <span className="text-gray-500">Focus Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-cyan-600 text-lg">6/8</span>
            <span className="text-gray-500">Water Intake</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-pink-600 text-lg">1</span>
            <span className="text-gray-500">Journal Entries</span>
          </div>
        </div>
      </div>
      <button className="w-full py-2 mt-5 rounded bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold hover:scale-105 shadow transition">
        Toggle View
      </button>
    </aside>
  );
}

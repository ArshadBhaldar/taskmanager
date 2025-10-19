export default function RightPanel() {
  return (
    <aside className="bg-white rounded shadow px-6 py-6 w-80 h-full flex flex-col gap-6">
      <div>
        <div className="text-md font-bold mb-1">Saturday, October 18, 2025</div>
        <div className="text-sm mb-3">Quote of the Day</div>
        <div className="italic text-gray-700 mb-2">"The best way to predict the future is to create it."</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">Mood Tracker</span>
          {/* Emoji row */}
          <div className="flex gap-1">
            <span>😐</span> <span>🙂</span> <span>😊</span> <span>😃</span>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-sm">Stress Level</span>
          <input type="range" min="1" max="3" className="w-full" />
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold mb-1">Recommendations</div>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>Consider a 15-minute mindful walk to refresh your mind.</li>
          <li>Listen to some calming music.</li>
        </ul>
      </div>
      <div>
        <div className="text-sm font-semibold mb-1">Daily Stats</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>Tasks Completed<br/><span className="font-bold text-blue-600">8/12</span></div>
          <div>Focus Time<br/><span className="font-bold">2.5h</span></div>
          <div>Water Intake<br/><span className="font-bold text-blue-500">6/8 glasses</span></div>
          <div>Journal Entries<br/><span className="font-bold">1</span></div>
        </div>
      </div>
      <button className="w-full py-2 mt-5 rounded bg-gray-200 hover:bg-gray-300 font-medium">Toggle View</button>
    </aside>
  );
}

export default function OverviewPanel() {
  return (
    <section>
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-7 mb-6 border-l-8 border-blue-300 relative overflow-hidden">
        <div className="absolute right-0 top-0 m-3 opacity-10 text-blue-300 text-7xl font-bold pointer-events-none select-none">
          &#128467;
        </div>
        <h2 className="font-bold text-2xl text-blue-800 mb-4">✨ Task Overview</h2>
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-medium text-blue-500">Work Projects </span>
            <div className="flex gap-3 flex-wrap mt-1">
              <span className="bg-blue-100 text-blue-700 text-xs rounded-full px-3 py-1">Finalize Q3 report</span>
              <span className="bg-blue-100 text-blue-700 text-xs rounded-full px-3 py-1">Client presentation</span>
              <span className="bg-blue-100 text-blue-700 text-xs rounded-full px-3 py-1">Team sync-up</span>
            </div>
          </div>
          <div>
            <span className="font-medium text-indigo-500">Study Goals </span>
            <div className="flex gap-3 flex-wrap mt-1">
              <span className="bg-indigo-100 text-indigo-700 text-xs rounded-full px-3 py-1">React tutorial</span>
              <span className="bg-indigo-100 text-indigo-700 text-xs rounded-full px-3 py-1">Algorithms book</span>
              <span className="bg-indigo-100 text-indigo-700 text-xs rounded-full px-3 py-1">Practice LeetCode</span>
            </div>
          </div>
          <div>
            <span className="font-medium text-pink-500">Personal Growth </span>
            <div className="flex gap-3 flex-wrap mt-1">
              <span className="bg-pink-100 text-pink-700 text-xs rounded-full px-3 py-1">Weekend hike</span>
              <span className="bg-pink-100 text-pink-700 text-xs rounded-full px-3 py-1">Call Mom</span>
              <span className="bg-pink-100 text-pink-700 text-xs rounded-full px-3 py-1">Meditate 10min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

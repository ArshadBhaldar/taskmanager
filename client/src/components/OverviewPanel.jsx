export default function OverviewPanel() {
  return (
    <section>
      <div className="bg-white rounded shadow p-6 mb-6">
        <h2 className="font-semibold mb-4">Task Overview</h2>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-medium">Work Projects</span>
            <ul className="list-disc ml-6">
              <li>Finalize Q3 report</li>
              <li>Prepare client presentation</li>
              <li>Schedule team sync-up</li>
            </ul>
          </div>
          <div>
            <span className="font-medium">Study Goals</span>
            <ul className="list-disc ml-6">
              <li>Complete React tutorial</li>
              <li>Read Chapter 5 of Algorithms book</li>
              <li>Practice LeetCode problems</li>
            </ul>
          </div>
          <div>
            <span className="font-medium">Personal Growth</span>
            <ul className="list-disc ml-6">
              <li>Plan weekend hike</li>
              <li>Call Mom</li>
              <li>Meditate for 10 minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

const sampleNotes = [
  {
    title: "Project Alpha Brainstorm",
    content:
      "Key ideas for Project Alpha: user onboarding flow, feature prioritization, backend integration strategy. Need to schedule a follow-up meeting.",
    tags: ["Work", "Ideas"],
  },
  {
    title: "Groceries List",
    content: "Milk, eggs, bread, spinach, chicken breast, olive oil, coffee beans.",
    tags: ["Personal", "Reminders"],
  },
  {
    title: "Book Recommendations",
    content: "The Alchemist, Sapiens, Educated. Add 'Thinking, Fast and Slow' to the list.",
    tags: ["Ideas", "Personal"],
  },
  {
    title: "Meeting Notes: Q3 Planning",
    content:
      "Discussed Q3 goals, allocated resources, set preliminary deadlines for marketing campaigns and product development. Actions: follow up with John on budget, prepare",
    tags: ["Work", "Reminders"],
  },
  {
    title: "Quote of the Day",
    content: 'The best way to predict the future is to create it. - Peter Drucker',
    tags: ["Quotes", "Inspiration"],
  },
  {
    title: "Weekend Plans",
    content: "Hiking in the national park, visit the new art exhibition downtown, meal prep for the week.",
    tags: ["Personal", "Ideas"],
  },
];

const sampleTags = [
  "All Notes",
  "Ideas",
  "Reminders",
  "Personal",
  "Work",
  "Quotes",
  "Inspiration",
];

export default function JournalNotesPage() {
  const [journal, setJournal] = useState(
    "Today marks the end of a surprisingly productive week. I managed to tackle several long-standing tasks, which has given me a great sense of accomplishment. The new technique for time blocking has truly made a difference in maintaining focus. \n\nI spent the morning reviewing the new project proposal and provided some initial feedback. It's exciting to see the team's ideas taking shape. In the afternoon, I dedicated time to learning about advanced React hooks, particularly useReducer and useContext. The initial learning curve was steep, but the patterns are starting to click.\n\nEvening was reserved for personal growth—reading 'Atomic Habits' by James Clear. The concept of habit stacking is something I definitely want to integrate more consciously into my routine. It's not just about willpower, but about designing an environment that makes good habits inevitable and bad ones impossible."
  );
  const [selectedTag, setSelectedTag] = useState("All Notes");
  const [notes, setNotes] = useState(sampleNotes);

  const filteredNotes =
    selectedTag === "All Notes"
      ? notes
      : notes.filter((n) => n.tags.includes(selectedTag));

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar assumed in main layout */}
      <main className="flex-1 px-12 py-10">
        {/* Journal entry section */}
        <section className="bg-white rounded-xl shadow p-7 mb-8">
          <header className="flex items-center mb-3">
            <h2 className="text-lg font-semibold mr-6 flex items-center">
              <span role="img" aria-label="calendar" className="mr-2">📅</span>
              Friday, July 26, 2024
            </h2>
            <button className="px-2 py-1 rounded border text-sm ml-4 hover:bg-gray-100 transition">Today</button>
            {/* Simple dots for carousel navigation */}
            <div className="flex mx-6 gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`h-2 w-2 rounded-full ${n === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <input
              className="ml-auto border rounded-md px-3 py-1 focus:ring w-72"
              type="text"
              placeholder="Search journal entries..."
            />
          </header>
          <div className="mb-3">
            <label className="font-semibold" htmlFor="journal">Reflections on a Productive Week</label>
            <textarea
              id="journal"
              className="w-full mt-1 border rounded-lg px-3 py-2 text-gray-800 focus:ring focus:outline-none min-h-[120px] bg-gray-50"
              value={journal}
              onChange={e => setJournal(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700 mt-2">
            Save Entry
          </button>
        </section>
        {/* Notes section */}
        <section className="bg-white rounded-xl shadow p-7">
          <header className="flex items-center mb-4">
            <div className="flex gap-2 mr-4 flex-wrap">
              {sampleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1 rounded-full border text-sm mr-2 mb-2
                    ${selectedTag === tag
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"}
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
            <button
              className="ml-auto text-sm flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => alert("Add new note!")}
            >
              + New Note
            </button>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredNotes.map((note, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg p-5 shadow-sm relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-base">{note.title}</h3>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-gray-700" title="Edit"><span role="img" aria-label="edit">✏️</span></button>
                    <button className="text-gray-400 hover:text-red-500" title="Delete"><span role="img" aria-label="delete">🗑️</span></button>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-sm">{note.content}</p>
                <div className="flex flex-wrap gap-1">
                  {note.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

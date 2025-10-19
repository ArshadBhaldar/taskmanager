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
      "Discussed Q3 goals, allocated resources, set preliminary deadlines for marketing campaigns and product development.",
    tags: ["Work", "Reminders"],
  },
  {
    title: "Quote of the Day",
    content: "The best way to predict the future is to create it. - Peter Drucker",
    tags: ["Quotes", "Inspiration"],
  },
  {
    title: "Weekend Plans",
    content:
      "Hiking in the national park, visit the new art exhibition downtown, meal prep for the week.",
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
    "Today marks the end of a surprisingly productive week. I managed to tackle several long-standing tasks, which has given me a great sense of accomplishment. I dedicated time to learning React hooks — especially useReducer and useContext. The patterns are starting to click!\n\nEvening was reserved for personal growth—reading 'Atomic Habits' by James Clear. The concept of habit stacking is something I want to apply more consciously in my routine."
  );
  const [selectedTag, setSelectedTag] = useState("All Notes");
  const [notes, setNotes] = useState(sampleNotes);

  const filteredNotes =
    selectedTag === "All Notes"
      ? notes
      : notes.filter((n) => n.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-blue-50 to-purple-50 py-10">
      <main className="max-w-7xl mx-auto px-8">
        {/* Journal Entry Section */}
        <section className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-10 border-l-8 border-indigo-300 relative">
          <div className="absolute right-6 top-4 opacity-5 text-8xl font-bold text-indigo-500 pointer-events-none">
            📖
          </div>

          <header className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-indigo-800 flex items-center">
              <span role="img" aria-label="calendar" className="mr-2">📅</span>
              Friday, July 26, 2024
            </h2>
            <button className="ml-4 border border-indigo-300 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-indigo-100 transition">
              Today
            </button>
          </header>

          <label htmlFor="journal" className="block font-semibold text-indigo-700 mb-2">
            Reflections on a Productive Week
          </label>
          <textarea
            id="journal"
            className="w-full rounded-xl border-2 border-indigo-200 bg-white/40 px-4 py-3 text-gray-800 shadow-inner focus:ring-2 focus:ring-indigo-400 transition min-h-[140px]"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
          />
          <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition font-semibold">
            Save Entry
          </button>
        </section>

        {/* Notes Section */}
        <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border-l-8 border-blue-300 relative">
          <div className="absolute right-6 top-4 opacity-5 text-7xl text-blue-500 font-bold pointer-events-none">
            🗒️
          </div>
          <header className="flex items-center mb-6">
            <div className="flex flex-wrap gap-2">
              {sampleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1 text-sm rounded-full border font-medium transition-all
                    ${
                      selectedTag === tag
                        ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white border-transparent"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <button
              className="ml-auto px-5 py-2 text-sm rounded-lg shadow font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition"
              onClick={() => alert("Add new note!")}
            >
              + New Note
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredNotes.map((note, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-indigo-100 p-5 shadow-md hover:shadow-lg transition relative hover:border-blue-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-indigo-800 leading-snug">{note.title}</h3>
                  <div className="flex gap-2 text-sm">
                    <button
                      className="text-gray-400 hover:text-green-600 transition"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="text-gray-400 hover:text-red-600 transition"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-snug">{note.content}</p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 px-3 py-0.5 rounded-full text-xs font-medium shadow-sm"
                    >
                      {tag}
                    </span>
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

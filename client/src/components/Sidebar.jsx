import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Tasks & Subtasks", path: "/tasks" },
  { name: "Journal & Notes", path: "/journal-notes" },
  { name: "Focus & Progress", path: "/focus-progress" },
  { name: "Analytics", path: "/analytics" },
  { name: "Mental Health", path: "/mental-health" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-60 bg-white border-r flex flex-col justify-between py-6 h-screen">
      <nav className="space-y-2 px-6">
        <div className="font-semibold text-lg mb-4">Dashboard</div>
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block rounded px-3 py-2 transition-colors ${
                  location.pathname === link.path
                    ? "bg-gray-100 font-bold text-purple-600"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-6">
        <button className="w-full my-3 py-2 text-white bg-red-500 rounded">Logout</button>
        <div className="text-xs text-gray-500 mt-3">Your daily dose of inspiration.</div>
      </div>
    </aside>
  );
}

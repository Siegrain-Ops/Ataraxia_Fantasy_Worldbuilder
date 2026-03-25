import { MemoryRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Entities from "./pages/Entities";
import Lore from "./pages/Lore";
import Timeline from "./pages/Timeline";
import World from "./pages/World";

const NAV_ITEMS = [
  { icon: "⬡", label: "Dashboard", to: "/"         },
  { icon: "🌍", label: "World",     to: "/world"    },
  { icon: "📖", label: "Lore",      to: "/lore"     },
  { icon: "👤", label: "Entities",  to: "/entities" },
  { icon: "⏳", label: "Timeline",  to: "/timeline" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">AFW</div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ icon, label, to }) => (
          <NavLink
            key={label}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              "nav-item" + (isActive ? " nav-item--active" : "")
            }
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="topbar">
      <span className="topbar-title">Ataraxia Fantasy Worldbuilder</span>
      <input
        className="topbar-search"
        type="search"
        placeholder="Search…"
        disabled
      />
    </header>
  );
}

function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="layout">
        <Sidebar />
        <div className="layout-right">
          <Topbar />
          <main className="content">
            <Routes>
              <Route path="/"         element={<Dashboard />} />
              <Route path="/world"    element={<World />}     />
              <Route path="/lore"     element={<Lore />}      />
              <Route path="/entities" element={<Entities />}  />
              <Route path="/timeline" element={<Timeline />}  />
            </Routes>
          </main>
        </div>
      </div>
    </MemoryRouter>
  );
}

export default App;

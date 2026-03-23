const NAV_ITEMS = [
  { icon: "⬡", label: "Dashboard" },
  { icon: "🌍", label: "World" },
  { icon: "📖", label: "Lore" },
  { icon: "👤", label: "Entities" },
  { icon: "⏳", label: "Timeline" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">AFW</div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ icon, label }) => (
          <div key={label} className="nav-item">
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </div>
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
    <div className="layout">
      <Sidebar />
      <div className="layout-right">
        <Topbar />
        <main className="content">
          <div className="placeholder">
            <h2>No world selected</h2>
            <p>Open or create a world to begin building.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

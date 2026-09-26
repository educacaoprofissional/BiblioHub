export default function Header({
    onMenu,
    dark,
    onDark,
    search,
    onSearch,
  }) {
    return (
      <header className="header">
        <button
          className="btn btn-icon"
          onClick={onMenu}
        >
          ☰
        </button>
  
        <div className="logo">
          <div className="logo-icon">📚</div>
          <span>BiblioHub</span>
        </div>
  
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Buscar livros, autores..."
            value={search}
            onChange={(e) =>
              onSearch(e.target.value)
            }
          />
  
          {search && (
            <button
              className="clear-search"
              onClick={() => onSearch("")}
            >
              ✕
            </button>
          )}
        </div>
  
        <button
          className="btn btn-icon"
          onClick={onDark}
          title={
            dark ? "Modo claro" : "Modo escuro"
          }
        >
          {dark ? "☀️" : "🌙"}
        </button>
  
        <button className="btn btn-icon">
          🔔
        </button>
  
        <button className="btn btn-icon">
          👤
        </button>
      </header>
    );
  }
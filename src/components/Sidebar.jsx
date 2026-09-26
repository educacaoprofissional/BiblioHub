import { GENRE_ICONS } from "../data/books";

export default function Sidebar({
  isOpen,
  activeView,
  onView,
  activeCategory,
  onCategory,
  favCount,
  borCount,
  rlCount,
  categoryCounts,
}) {
  const genres = Object.keys(categoryCounts).sort();

  const navItems = [
    ["home", "🏠", "Início"],
    ["explore", "📖", "Explorar"],
    ["popular", "📈", "Populares"],
    ["new", "📚", "Novidades"],
  ];

  return (
    <aside
      className={`sidebar ${
        isOpen ? "sidebar-open" : ""
      }`}
    >
      <div className="sidebar-scroll">
        <h4>Menu</h4>

        {navItems.map(([view, icon, label]) => (
          <button
            key={view}
            className={`nav-item ${
              activeView === view &&
              !activeCategory
                ? "active"
                : ""
            }`}
            onClick={() => onView(view)}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}

        <hr />

        <h4>Biblioteca</h4>

        <button
          className="nav-item"
          onClick={() => onView("mybooks")}
        >
          📚 Meus Livros
          {borCount > 0 && (
            <span className="badge">
              {borCount}
            </span>
          )}
        </button>

        <button
          className="nav-item"
          onClick={() => onView("favorites")}
        >
          ❤️ Favoritos
          {favCount > 0 && (
            <span className="badge">
              {favCount}
            </span>
          )}
        </button>

        <button
          className="nav-item"
          onClick={() => onView("readlater")}
        >
          🕐 Ler Mais Tarde
          {rlCount > 0 && (
            <span className="badge">
              {rlCount}
            </span>
          )}
        </button>

        <hr />

        <h4>Categorias</h4>

        {genres.map((genre) => (
          <button
            key={genre}
            className={`nav-item ${
              activeCategory === genre
                ? "active"
                : ""
            }`}
            onClick={() => onCategory(genre)}
          >
            <span>
              {GENRE_ICONS[genre] ?? "📚"}
            </span>

            {genre}

            <span className="badge">
              {categoryCounts[genre]}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
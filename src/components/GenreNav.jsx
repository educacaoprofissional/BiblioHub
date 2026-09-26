import { GENRE_ICONS } from "../data/books";

export default function GenreNav({
  activeCategory,
  onSelect,
  categoryCounts,
}) {
  const genres = Object.keys(categoryCounts).sort();

  return (
    <div className="genre-nav">
      <div className="chips-row">
        <button
          className={`chip ${
            !activeCategory ? "chip-active" : ""
          }`}
          onClick={() => onSelect(null)}
        >
          ✨ Todos
        </button>

        {genres.map((genre) => (
          <button
            key={genre}
            className={`chip ${
              activeCategory === genre
                ? "chip-active"
                : ""
            }`}
            onClick={() => onSelect(genre)}
          >
            {GENRE_ICONS[genre] ?? "📚"} {genre}

            <span className="chip-count">
              {categoryCounts[genre]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
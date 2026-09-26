import BookCover from "./BookCover";

export default function BookCard({
  book,
  isFavorite,
  isBorrowed,
  isReadLater,
  onFavorite,
  onBorrow,
  onReadLater,
}) {
  return (
    <article className="book-card">
      <div className="book-cover-container">
        <BookCover category={book.category} title={book.title} />

        {isBorrowed && (
          <span className="badge badge-green">
            Emprestado
          </span>
        )}

        <div className="card-actions">
          <button
            className="btn btn-icon"
            onClick={onFavorite}
            title={isFavorite ? "Remover favorito" : "Favoritar"}
          >
            {isFavorite ? "❤️" : "♡"}
          </button>

          <button
            className="btn btn-icon"
            onClick={onReadLater}
            title={
              isReadLater
                ? "Remover de Ler Mais Tarde"
                : "Ler Mais Tarde"
            }
          >
            🕐
          </button>
        </div>
      </div>

      <div className="book-info">
        <div>
          <div className="book-title">
            {book.title}
          </div>

          <div className="book-author">
            {book.author}
          </div>
        </div>

        <div className="book-meta">
          <span className="star">★</span>
          <span>{book.rating}</span>

          <span className="category">
            {book.category}
          </span>
        </div>

        <button
          className={`btn ${
            isBorrowed ? "btn-outline" : "btn-primary"
          }`}
          disabled={!book.available && !isBorrowed}
          onClick={onBorrow}
        >
          📖{" "}
          {isBorrowed
            ? "Devolver"
            : book.available
              ? "Emprestar"
              : "Indisponível"}
        </button>
      </div>
    </article>
  );
}
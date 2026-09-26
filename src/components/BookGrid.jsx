import BookCard from "./BookCard";

export default function BookGrid({
  books,
  favorites,
  borrowed,
  readLater,
  onFavorite,
  onBorrow,
  onReadLater,
}) {
  if (!books.length) {
    return (
      <div className="empty-state">
        Nenhum livro encontrado.
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.has(book.id)}
          isBorrowed={borrowed.has(book.id)}
          isReadLater={readLater.has(book.id)}
          onFavorite={() =>
            onFavorite(book.id, book.title)
          }
          onBorrow={() =>
            onBorrow(book.id, book.title)
          }
          onReadLater={() =>
            onReadLater(book.id, book.title)
          }
        />
      ))}
    </div>
  );
}
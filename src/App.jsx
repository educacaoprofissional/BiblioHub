import { useMemo, useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GenreNav from "./components/GenreNav";
import BookGrid from "./components/BookGrid";
import FeaturedSection from "./components/FeaturedSection";

import { ALL_BOOKS } from "./data/books";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState(null);
  const [activeView, setActiveView] =
    useState("home");

  const [favorites, setFavorites] =
    useState(new Set());

  const [borrowed, setBorrowed] =
    useState(new Set());

  const [readLater, setReadLater] =
    useState(new Set());

  const [featuredBorrowed, setFeaturedBorrowed] =
    useState(false);

  const categoryCounts = useMemo(() => {
    const counts = {};

    ALL_BOOKS.forEach((book) => {
      counts[book.category] =
        (counts[book.category] || 0) + 1;
    });

    return counts;
  }, []);

  function toggleFavorite(id) {
    setFavorites((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function toggleBorrow(id) {
    setBorrowed((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function toggleReadLater(id) {
    setReadLater((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  function handleView(view) {
    setActiveView(view);
    setActiveCategory(null);
    setSearch("");
  }

  function handleCategory(category) {
    setActiveCategory(category);
    setActiveView("explore");
    setSearch("");
  }

  const baseBooks = useMemo(() => {
    switch (activeView) {
      case "favorites":
        return ALL_BOOKS.filter((book) =>
          favorites.has(book.id)
        );

      case "mybooks":
        return ALL_BOOKS.filter((book) =>
          borrowed.has(book.id)
        );

      case "readlater":
        return ALL_BOOKS.filter((book) =>
          readLater.has(book.id)
        );

      case "popular":
        return ALL_BOOKS.filter(
          (book) => book.rating >= 4.7
        );

      case "new":
        return ALL_BOOKS.slice(-4);

      default:
        return ALL_BOOKS;
    }
  }, [
    activeView,
    favorites,
    borrowed,
    readLater,
  ]);

  const filteredBooks = useMemo(() => {
    let books = baseBooks;

    if (activeCategory) {
      books = books.filter(
        (book) =>
          book.category === activeCategory
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      books = books.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(query) ||
          book.author
            .toLowerCase()
            .includes(query)
      );
    }

    return books;
  }, [
    baseBooks,
    activeCategory,
    search,
  ]);

  const showHome =
    activeView === "home" && !search;

  const sectionTitle =
    activeView === "favorites"
      ? "Favoritos"
      : activeView === "mybooks"
        ? "Meus Livros"
        : activeView === "readlater"
          ? "Ler Mais Tarde"
          : activeView === "popular"
            ? "Populares"
            : activeView === "new"
              ? "Novidades"
              : activeCategory
                ? activeCategory
                : search
                  ? `Resultados para "${search}"`
                  : "Explorar Livros";

  return (
    <div
      className={`app ${
        dark ? "dark-mode" : ""
      }`}
    >
      <Header
        onMenu={() =>
          setSidebarOpen((value) => !value)
        }
        dark={dark}
        onDark={() =>
          setDark((value) => !value)
        }
        search={search}
        onSearch={(value) => {
          setSearch(value);

          if (value) {
            setActiveView("explore");
            setActiveCategory(null);
          }
        }}
      />

      <div className="layout">
        <Sidebar
          isOpen={sidebarOpen}
          activeView={activeView}
          onView={handleView}
          activeCategory={activeCategory}
          onCategory={handleCategory}
          favCount={favorites.size}
          borCount={borrowed.size}
          rlCount={readLater.size}
          categoryCounts={categoryCounts}
        />

        <main className="main">
          <div className="content">
            {showHome ? (
              <>
                <FeaturedSection
                  isBorrowed={featuredBorrowed}
                  onBorrow={() =>
                    setFeaturedBorrowed(
                      (value) => !value
                    )
                  }
                  onDetails={() =>
                    console.log(
                      "Abrir detalhes"
                    )
                  }
                />

                <GenreNav
                  activeCategory={activeCategory}
                  onSelect={handleCategory}
                  categoryCounts={categoryCounts}
                />

                {Object.keys(categoryCounts)
                  .sort()
                  .map((category) => {
                    const books =
                      ALL_BOOKS.filter(
                        (book) =>
                          book.category ===
                          category
                      );

                    return (
                      <section key={category}>
                        <h3>
                          {category}
                        </h3>

                        <BookGrid
                          books={books}
                          favorites={favorites}
                          borrowed={borrowed}
                          readLater={readLater}
                          onFavorite={
                            toggleFavorite
                          }
                          onBorrow={
                            toggleBorrow
                          }
                          onReadLater={
                            toggleReadLater
                          }
                        />
                      </section>
                    );
                  })}
              </>
            ) : (
              <>
                <h2>{sectionTitle}</h2>

                <GenreNav
                  activeCategory={activeCategory}
                  onSelect={handleCategory}
                  categoryCounts={categoryCounts}
                />

                <BookGrid
                  books={filteredBooks}
                  favorites={favorites}
                  borrowed={borrowed}
                  readLater={readLater}
                  onFavorite={toggleFavorite}
                  onBorrow={toggleBorrow}
                  onReadLater={toggleReadLater}
                />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
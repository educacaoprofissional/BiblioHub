import { COVER_COLORS, GENRE_ICONS } from "../data/books";

export default function BookCover({ category, title }) {
  const bg = COVER_COLORS[category] ?? "#343a40";

  return (
    <div
      style={{
        background: bg,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>
        {GENRE_ICONS[category] ?? "📚"}
      </span>

      <span
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "0.75rem",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {title}
      </span>
    </div>
  );
}
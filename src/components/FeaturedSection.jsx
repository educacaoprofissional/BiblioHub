export default function FeaturedSection({
    isBorrowed,
    onBorrow,
    onDetails,
  }) {
    return (
      <section className="featured">
        <div className="featured-cover">
          🚀
        </div>
  
        <div className="featured-content">
          <span className="featured-badge">
            Destaque da Semana
          </span>
  
          <h2>
            O Guia do Mochileiro das Galáxias
          </h2>
  
          <p className="muted">
            por Douglas Adams
          </p>
  
          <div className="rating">
            ★★★★★
            <strong> 4.9</strong>
            <span>(2.847 avaliações)</span>
          </div>
  
          <p className="description">
            Uma hilariante aventura espacial que
            acompanha Arthur Dent após a Terra ser
            destruída. Um clássico da ficção científica
            com humor britânico e reflexões filosóficas.
          </p>
  
          <div className="featured-actions">
            <button
              className={`btn ${
                isBorrowed
                  ? "btn-outline"
                  : "btn-primary"
              }`}
              onClick={onBorrow}
            >
              📖{" "}
              {isBorrowed
                ? "Devolver"
                : "Emprestar Agora"}
            </button>
  
            <button
              className="btn btn-outline"
              onClick={onDetails}
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </section>
    );
  }
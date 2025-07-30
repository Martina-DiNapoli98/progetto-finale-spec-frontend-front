import { useGlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";

export default function Wishlist() {

  /* DATI DAL GLOBAL CONTEXT */
  const { favorites, compare, addCompare, removeFavorite } = useGlobalContext();

  /* CONTROLLIAMO SE CI SONO CARD NEI PREFERITI */
  if (!favorites || favorites.length === 0) {
    return <p className="text-center mt-5">Nessun viaggio nei preferiti.</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Viaggi Preferiti</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {/* MAPPIAMO I VIAGGI PREFERITI */}
        {favorites.map(trip => {
          const isInCompare = compare.some(c => c.id === trip.id);
          return (
            /* LI STAMPIAMO NELLE CARD */
            <div className="col" key={trip.id}>
              <div className="card h-100 shadow-sm">
                <img src={trip.img} className="card-img-top" alt={trip.title} style={{ maxHeight: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{trip.title}</h5>
                  <p className="text-muted text-uppercase small">{trip.category}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">

                    {/* RITORNIAMO ALLA PAGINA DEI DETTAGLI */}
                    <Link to={`/trip/${trip.id}`} className="btn btn-sm btn-outline-primary">Dettagli</Link>

                    {/* BOTTONE PER CONFRONTARE */}
                    <button
                      className={`btn btn-sm ${isInCompare ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => addCompare(trip)}
                    >
                      {isInCompare ? "Confronta ✓" : "Confronta"}
                    </button>
                    {/* BOTTONE PER RIMUOVERE DAI PREFERITI */}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFavorite(trip.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <div className="text-center mt-4">
            <Link to="/travel" className="btn btn-home btn-lg px-5">
              Esplora altri viaggi
            </Link>
          </div>
    </div>
  );
}


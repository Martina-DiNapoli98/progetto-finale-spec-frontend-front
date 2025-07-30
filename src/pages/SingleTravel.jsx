import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";

export default function SingleTravel() {

  /* PARAMETRO DINAMICO */
  const { id } = useParams();

  /* RECUPERIAMO I DATI DAL GLOBAL CONTEXT */
  const { selectedTrip, fetchSingleTrip, favorites, addFavorite, removeFavorite, addCompare, compare } = useGlobalContext();

  /* USEEFFECT PER TROVARE IL SINGOLO VIAGGIO CON IL PARAMETRO DINAMICO */
  useEffect(() => {
    fetchSingleTrip(id);
  }, [id]);

  if (!selectedTrip) return <p className="text-center mt-5">Caricamento in corso...</p>;
  console.log("selectedTrip.trip", selectedTrip.trip);


  const { title, img, category, description, durationDays, price, partenza, ritorno } = selectedTrip.trip;

  const isFavorite = favorites.some(f => f.id === selectedTrip.trip.id);
  const isInCompare = compare.some(t => t.id === selectedTrip.trip.id);

  /* FUNZIONE PER LA WHISHLIST */
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(selectedTrip.trip.id);
    } else {
      addFavorite(selectedTrip.trip);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        <div className="col-12">
          <img
            src={img}
            alt={title}
            className="w-100 rounded-4 shadow-lg"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>

        <div className="col-lg-8">
          <h1 className="fw-bold mb-4 mt-3" style={{ fontSize: "2.5rem", lineHeight: "1.1" }}>{title}</h1>
          <span className="badge bg-primary text-uppercase fs-6 mb-3 mt-2">{category}</span>
          
          <p className="lead mb-4" style={{ fontSize: "1.25rem", color: "#444" }}>
            {description}
          </p>

          <ul className="list-inline mb-4">
            <li className="list-inline-item me-4">
              <strong>Durata:</strong> {durationDays} giorni
            </li>
            <li className="list-inline-item">
              <strong>Prezzo:</strong> <span className="text-success fw-bold fs-5">€{price}</span>
            </li>
          </ul>
          <ul className="list-inline mb-4">
            <li className="list-inline-item">
              <div><strong>Partenza:</strong> <span>{partenza}</span></div>
            </li>
            <li>
              <div> <strong>Ritorno:</strong> <span >{ritorno}</span></div>
            </li>
          </ul>
            {/* BOTTONI */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <button
              className={`btn ${isInCompare ? "btn-primary" : "btn-outline-primary"}`}
              style={{ minWidth: "120px", height: "45px" }}
              onClick={() => addCompare(selectedTrip.trip)}
            >
              {isInCompare ? "In Confronto" : "Confronta"}
            </button>

            <button
              onClick={toggleFavorite}
              className="btn btn-outline-danger"
              aria-label="Preferiti"
              style={{
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                color: isFavorite ? "red" : "inherit",
              }}
            >
              <i className={`bi ${isFavorite ? "bi-suit-heart-fill" : "bi-suit-heart"}`}></i>
            </button>

            <button
              className="btn btn-success"
              style={{ minWidth: "140px", height: "45px" }}
              onClick={() => alert("Funzione prenota non ancora implementata!")}
            >
              Prenota ora
            </button>
          </div>
        </div>
      </div>

      <div className="includes-section mt-4">
        <h4 className="mb-3">Cosa include</h4>
        <ul className="list-unstyled">
          <li><i className="bi bi-airplane"></i> Volo A/R</li>
          <li><i className="bi bi-backpack"></i> Hotel 4 stelle con colazione inclusa</li>
          <li><i className="bi bi-bus-front"></i> Tour guidato della città</li>
          <li><i className="bi bi-heart-pulse"></i> Assicurazione medica</li>
          <li><i className="bi bi-bus-front"></i> Trasferimenti aeroporto</li>
        </ul>
      </div>
      <div className="text-center">
           <Link to="/travel" className="btn btn-home btn-lg px-5">
            Esplora altri viaggi
          </Link>
      </div>
      <div className="contact-us mt-5 p-4 border rounded-3 bg-light">
          <h4>Se hai dubbi, puoi scriverci</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input type="text" className="form-control" id="name" placeholder="Il tuo nome" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="La tua email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Messaggio</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Scrivi qui il tuo dubbio" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
          </form>
        </div>
        <section className="container my-5">
            <h2 className="text-center mb-5">Come funziona</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <i className="bi bi-search fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">1. Cerca la destinazione</h5>
                <p>Esplora centinaia di mete in tutto il mondo, filtrando per tipo di viaggio, budget o ispirazione.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-bar-chart-line fs-1 text-success mb-3"></i>
                <h5 className="fw-bold">2. Confronta le offerte</h5>
                <p>Visualizza le opzioni più convenienti e confronta le esperienze per trovare quella perfetta per te.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-airplane fs-1 text-danger mb-3"></i>
                <h5 className="fw-bold">3. Prenota e parti</h5>
                <p>Un clic e sei in viaggio. Tutto chiaro, tutto semplice, tutto pronto per farti vivere il mondo.</p>
              </div>
            </div>
          </section>
    </div>

  );
}




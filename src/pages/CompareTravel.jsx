import { useGlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";

export default function CompareTravel() {

  /* DATI DAL GLOBAL CONTEXT */
  const { compare, removeCompare } = useGlobalContext();
  

  /* CONTROLLIAMO SE CI SONO VIAGGI NELLA PAGINA */
  if (!compare || compare.length === 0) {
    return <p className="text-center mt-5">Nessun viaggio selezionato per il confronto.</p>;
  }

  return (
    /* PAGINA PER CONFRONTARE I VIAGGI */
     <>
     
        <main className="container my-5">
          <h2 className="text-center mb-4">Confronta Viaggi</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {/* MAPPIAMO PER OGNI VIAGGIO */}
            {compare.map(trip => (
              <div className="col" key={trip.id}>
                <div className="card h-100 shadow-sm">
                  <img src={trip.img} className="card-img-top" alt={trip.title} style={{ maxHeight: "200px", objectFit: "cover" }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">{trip.title}</h5>
                    <p className="text-muted text-uppercase small">{trip.category}</p>
                    <p><strong>Durata:</strong> {trip.durationDays} giorni</p>
                    <p><strong>Prezzo:</strong> €{trip.price}</p>
                    <ul className="list-inline mb-4">
                      <li className="list-inline-item">
                        <div><strong>Partenza:</strong> <span>{trip.partenza}</span></div>
                      </li>
                      <li>
                        <div> <strong>Ritorno:</strong> <span >{trip.ritorno}</span></div>
                      </li>
                    </ul>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      
                      {/* RITORNIAMO ALLA PAGINA DEI DETTAGLI */}
                      <Link to={`/trip/${trip.id}`} className="btn btn-sm btn-outline-primary">Dettagli</Link>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeCompare(trip.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/travel" className="btn btn-home btn-lg px-5">
              Esplora altri viaggi
            </Link>
          </div>
        </main>
     </>
  );
}

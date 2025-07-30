import { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";

export default function SearchResultsList() {

  /* DATI DAL GLOBAL CONTEXT */
  const { filteredTravel, search, error } = useGlobalContext();

  /* CONTROLLIAMO SE E' VUOTA E STAMPIAMO UN MESSAGGIO IN PAGINA */
  
  if (!search.trim()) return null;

  if (filteredTravel.length === 0) {
    return <p className="text-danger mt-3">Nessun viaggio trovato 🥲</p>;
  }

  return (
    
    <ul className="list-group mt-3 search-list">

      {/* GESTIONE ERRORE */}
        {error && (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
       {/* MAPPIAMO SUI VIAGGI FILTRATI */}
      {filteredTravel.map((trip) => (
          <li
                key={trip.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{trip.title}</strong> — {trip.category}
                </div>
                
                {/* RITORNIAMO AI DETTAGLI DEL VIAGGIO */}
                  <Link
                      to={`/trip/${trip.id}`}
                      className="btn btn-search btn-outline-primary btn-sm mt-2 mt-md-0">
                      Dettagli viaggio
                  </Link>
            
          </li>
       ))}
    </ul>
  );
}

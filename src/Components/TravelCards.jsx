import { useGlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";

export default function TravelCards() {
  const { filteredTravel } = useGlobalContext();

  return (
    <div className="container mt-5">
      <ul className="list-group">
        {filteredTravel.map((t) => (
          <li
             key={t.id}
             id={`trip-${t.id}`}
            className="list-group-item d-flex justify-content-between align-items-center flex-column flex-md-row gap-2"
          >
            <div>
              <h5 className="mb-1">{t.title}</h5>
              <small className="text-muted">{t.category}</small>
            </div>

            <Link
              to={`/trip/${t.id}`}
              className="btn btn-outline-primary btn-sm mt-2 mt-md-0"
            >
              Dettagli viaggio
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

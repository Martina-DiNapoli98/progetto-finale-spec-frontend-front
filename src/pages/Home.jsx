import Carousel from "../Components/Carousel";
import { useGlobalContext } from "../Context/GlobalContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  const { setSearch } = useGlobalContext();

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <div className="home-page">

      {/* CAROUSEL */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* HERO */}
      <section className="hero bg-light text-center py-4 py-md-5">
        <div className="container px-3 px-md-5">
          <h1 className="title-home display-5 display-md-4 fw-bold">
            Esplora il mondo con noi
          </h1>
          <p className="lead text-secondary mb-3 mb-md-4">
            Scopri destinazioni da sogno e vivi esperienze indimenticabili.
          </p>
          <Link
            to="/travel"
            className="btn btn-home btn-lg px-3 px-md-5"
          >
            Inizia il tuo viaggio
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="container text-center my-4 my-md-5">
        <h2 className="mb-4">Perché viaggiare con noi?</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4">
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-star-fill text-warning fs-2 fs-md-1 mb-3"></i>
                <h5 className="card-title">Esperienze indimenticabili</h5>
                <p className="card-text">Ogni viaggio è curato nei minimi dettagli per offrirti il massimo.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-headset text-primary fs-2 fs-md-1 mb-3"></i>
                <h5 className="card-title">Assistenza H24</h5>
                <p className="card-text">Siamo sempre con te, prima, durante e dopo il viaggio.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-cash-coin text-success fs-2 fs-md-1 mb-3"></i>
                <h5 className="card-title">Prezzi trasparenti</h5>
                <p className="card-text">Nessun costo nascosto. Quello che vedi è quello che paghi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-light py-4 py-md-5">
        <div className="container text-center px-3 px-md-5">
          <h2 className="mb-4">Cosa dicono i nostri viaggiatori</h2>
          <div className="row g-3 g-md-4">
            <div className="col-12 col-md-4">
              <blockquote className="blockquote text-wrap">
                <p>"Un viaggio perfetto dall’inizio alla fine. Consigliatissimo!"</p>
                <footer className="blockquote-footer">Anna R. ★★★★★</footer>
              </blockquote>
            </div>
            <div className="col-12 col-md-4">
              <blockquote className="blockquote text-wrap">
                <p>"Servizio clienti top e organizzazione impeccabile."</p>
                <footer className="blockquote-footer">Marco L. ★★★★☆</footer>
              </blockquote>
            </div>
            <div className="col-12 col-md-4">
              <blockquote className="blockquote text-wrap">
                <p>"Un’esperienza che porterò nel cuore per sempre."</p>
                <footer className="blockquote-footer">Sara P. ★★★★★</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

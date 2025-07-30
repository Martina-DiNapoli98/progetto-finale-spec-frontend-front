import Carousel from "../Components/Carousel";
import { useGlobalContext } from "../Context/GlobalContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {
   
  /* PULIZIA SEARCHBAR QUANDO TORNIAMO IN HOME */
  const { setSearch } = useGlobalContext();

  useEffect(() => {
    setSearch(""); 
  }, []);


  return (

    <>
    
    <div className="home-page">
      
      <section className="carousel-section">
        {/* INSERIAMO IL CAROSELLO */}
        <Carousel />

      </section>
      <section className="hero bg-light text-center py-5 mb-4">
        <div className="container">
          <h1 className="title-home display-4 fw-bold ">Esplora il mondo con noi</h1>
          <p className="lead text-secondary mb-4">Scopri destinazioni da sogno e vivi esperienze indimenticabili.</p>

          {/* LINK CHE PORTA ALLA LISTA DI TUTTI I VIAGGI */}
          <Link to="/travel" className="btn btn-home btn-lg px-5">
            Inizia il tuo viaggio
          </Link>
        </div>
      </section>

            <section className="container text-center my-5">
        <h2 className="mb-4">Perché viaggiare con noi?</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                <i className="bi bi-star-fill text-warning fs-1 mb-3"></i>
                <h5 className="card-title">Esperienze indimenticabili</h5>
                <p className="card-text">Ogni viaggio è curato nei minimi dettagli per offrirti il massimo.</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                <i className="bi bi-headset text-primary fs-1 mb-3"></i>
                <h5 className="card-title">Assistenza H24</h5>
                <p className="card-text">Siamo sempre con te, prima, durante e dopo il viaggio.</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                <i className="bi bi-cash-coin text-success fs-1 mb-3"></i>
                <h5 className="card-title">Prezzi trasparenti</h5>
                <p className="card-text">Nessun costo nascosto. Quello che vedi è quello che paghi.</p>
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
    </>
  );
}

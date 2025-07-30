import Searchbar from "../Components/Searchbar";
import TravelCards from "../Components/TravelCards";
import { useGlobalContext } from "../Context/GlobalContext";
import { useEffect } from "react";

export default function Travel() {

  /* RECUPERIAMO DATI DAL GLOBAL CONTEXT */
  const {  selected, setSelected, setSortOrder, setSearch } = useGlobalContext();

  /* FUNZIONE  */
  function handleChange(e) {
    setSelected(e.target.value);
  }


  /* RESETTO LA RICERCA QUANDO ANDIAMO NELLA PAGINA DI TUTTI I VIAGGI */
  
   useEffect(() => {
    setSearch(""); 
  }, []);


  return (
    <div
      className="container mt-5 mb-5"
      style={{ backgroundColor: "#fafafa", borderRadius: "12px", padding: "2rem 1.5rem" }}
    >
      <header className="text-center mb-5">
        <h1
          className="display-4 fw-bold"
          style={{ color: "#89cbab", textShadow: "2px 2px 5   #e1a2a7" }}
        >
          Scopri il tuo prossimo viaggio da sogno
        </h1>
        <p
          className="lead fst-italic"
          style={{ color: "rgb(130, 182, 158)", fontWeight: "600", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}
        >
          Filtra, cerca e trova l’avventura che fa per te. Il mondo è qui, pronto a essere esplorato!
        </p>
      </header>
      <div
        className="row align-items-end g-4 mb-5 p-4 rounded-4 shadow"
        style={{ backgroundColor: "#FFFFFF", border: "2px solid rgb(240, 234, 168)" }}
      >
        {/* INSERISCO LA SEARCHBAR */}
        
        <Searchbar/>

         {/* SELEZIONA CATEGORIA */}
        <div className="col-md-4">
          <label
            htmlFor="categorySelect"
            className="form-label fw-semibold"
            style={{ color: "#495057", fontSize: "1rem" }}
          >
            Seleziona la categoria:
          </label>
          <select
            className="form-select form-select-lg"
            name="select"
            id="categorySelect"
            value={selected}
            onChange={handleChange}
            style={{
              borderColor: "#495057",
              boxShadow: "none",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={e => e.target.style.boxShadow = "0 0 10px rgba(255, 97, 152, 0.75)"}
            onBlur={e => e.target.style.boxShadow = "none"}
          >
            <option value="Tutti">Tutti</option>
            <option value="Avventura">Avventura</option>
            <option value="Feste">Feste</option>
            <option value="Romantico">Romantico</option>
            <option value="Relax">Relax</option>
            <option value="Culturale">Culturale</option>
            <option value="Spirituale">Spirituale</option>
          </select>
        </div>

            {/* ORDINA DALLA A-Z OPPURE Z-A */}
        <div className="col-md-4">
          <label
            htmlFor="sortOrder"
            className="form-label fw-semibold"
            style={{ color: "#495057", fontSize: "1rem" }}
          >
            Ordina per nome:
          </label>
          <select
            className="form-select form-select-lg"
            id="sortOrder"
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              borderColor: "#495057",
              boxShadow: "none",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={e => e.target.style.boxShadow = "0 0 10px #F59E0B"}
            onBlur={e => e.target.style.boxShadow = "none"}
          >
            <option value="default">-- Nessun ordine --</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      </div>

      {/* AGGIUNGO LE CARD DEI VIAGGI */}
      <TravelCards />

      {/* INFO */}
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

    
  );
}



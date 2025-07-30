import { useEffect } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";
import SearchResultsList from "../pages/SearchResults";
import Searchbar from "./Searchbar";

export default function Carousel() {

  
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleIndicators");
    if (carouselElement) {
      new BootstrapCarousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-custom" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner position-relative">
        <div className="carousel-item active">
          <img src="home.avif" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="seconda.avif" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="terza.avif" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 top-0 start-0 w-100 position-absolute">
          <h1 className="text-white fw-bold mb-4 shadow-lg">Dove vuoi andare oggi?</h1>
          <Searchbar />
          <SearchResultsList />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  );
}

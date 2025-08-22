import {  NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";

export default function Navbar() {
    const { favorites } = useGlobalContext();
  return (
    
    /* LOGO */
    <nav className="navbar navbar-expand-lg px-4 shadow-sm sticky-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src="logo.png"
          alt="Logo"
          style={{ height: "100px", marginRight: "40px" }}
          className=" logo"
        />
        <h4 className="fw-semibold mb-0 d-none d-sm-block">ViaggiVivi</h4>
      </div>
      <div className="d-flex align-items-center gap-3">
        <NavLink className="nav-link fw-semibold ml-2" to="/">Home</NavLink>
        <NavLink className="nav-link fw-semibold" to="/chi-siamo">About</NavLink>
        <NavLink to="/confronta" className="p-1 nav-link fw-semibold">Compare</NavLink>
        <NavLink to="/preferiti">
          <button
            className="btn btn-outline-danger position-relative"
            style={{ borderRadius: "50%", width: "45px", height: "40px" }}
            aria-label="Preferiti"
          >
            <i className="bi bi-suit-heart" style={{ fontSize: "1.2rem" }}></i>
            {favorites.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.7rem' }}
              >
                {favorites.length}
                <span className="visually-hidden">preferiti</span>
              </span>
            )}
          </button>
        </NavLink>
      </div>
    </div>
  </nav>
  );
}

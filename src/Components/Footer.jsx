

export default function Footer() {
  return (
    <footer className="footer text-light pt-2 pb-3 mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start text-dark">
            <img
              src="logo.png"
              alt="Logo"
              style={{ height: "150px" }}
              className="mb-2 logo"
            />
            <p className="small text-muted text-dark">
              Esplora il mondo con noi. Viaggi unici, emozioni autentici.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Seguici</h5>
            <div className="d-flex justify-content-center gap-3 mt-2 text-dark">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-twitter-x fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end mt-4 mt-md-0 text-dark">
            <h5>Contatti</h5>
            <p className="small mb-1">info@viaggidelcuore.it</p>
            <p className="small mb-0">+39 123 456 7890</p>
          </div>
        </div>

        <hr className="border-top border-secondary my-4" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Viaggi del Cuore. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}

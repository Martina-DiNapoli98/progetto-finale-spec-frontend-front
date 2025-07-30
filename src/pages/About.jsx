export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="team.avif"
            alt="Team"
            className="img-fluid rounded-4 shadow"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold text-primary mb-3">Chi siamo</h2>
          <p className="lead text-muted">
            Siamo un gruppo di viaggiatori incalliti, sognatori e creativi. Da anni trasformiamo
            sogni in biglietti aerei e idee in itinerari indimenticabili. La nostra missione?
            Aiutarti a trovare il viaggio perfetto, ogni singola volta.
          </p>
          <p className="text-muted">
            Che tu stia cercando una fuga romantica, un'avventura estrema o un'esperienza culturale
            autentica, ti accompagniamo con passione e competenza. Ogni viaggio che proponiamo è
            selezionato con cura, come se fosse il nostro.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <i className="bi bi-globe2 fs-1 text-primary mb-2"></i>
          <h5 className="fw-bold">+100 Destinazioni</h5>
          <p className="text-muted">Dal Giappone al Perù, abbiamo il mondo nel cuore (e nel sito).</p>
        </div>
        <div className="col-md-4 mb-4">
          <i className="bi bi-emoji-smile fs-1 text-success mb-2"></i>
          <h5 className="fw-bold">Clienti felici</h5>
          <p className="text-muted">Viaggiatori soddisfatti che tornano sempre con il sorriso.</p>
        </div>
        <div className="col-md-4 mb-4">
          <i className="bi bi-chat-dots fs-1 text-warning mb-2"></i>
          <h5 className="fw-bold">Supporto umano</h5>
          <p className="text-muted">Scrivici, chiamaci, mandaci un piccione viaggiatore. Rispondiamo sempre.</p>
        </div>
        <section className="bg-light p-4 rounded-4 mb-5">
            <h3 className="fw-bold mb-3 text-center">La nostra storia</h3>
            <p className="text-muted text-center mx-auto" style={{ maxWidth: "700px" }}>
              Tutto è iniziato con uno zaino, un volo low-cost e un sogno: rendere il viaggio accessibile, autentico e personale. Oggi aiutiamo centinaia di persone a scoprire il mondo, una tappa alla volta.
            </p>
          </section>
          <section className="mb-5">
            <h3 className="fw-bold text-center mb-4">Il nostro team</h3>
            <div className="row text-center">
              <div className="col-md-4">
                <img src="cane1.avif" alt="Marta" className="rounded-circle mb-2" width="120" />
                <h6 className="fw-bold">Marta</h6>
                <p className="text-muted">CEO & Nomade digitale</p>
              </div>
              <div className="col-md-4">
                <img src="cane3.avif" alt="Luca" className="rounded-circle mb-2" width="120" />
                <h6 className="fw-bold">Luca</h6>
                <p className="text-muted">Designer di Esperienze</p>
              </div>
              <div className="col-md-4">
                <img src="cane2.avif" alt="Sara" className="rounded-circle mb-2" width="120" />
                <h6 className="fw-bold">Sara</h6>
                <p className="text-muted">Esperta viaggi Sud America</p>
              </div>
            </div>
          </section>

      </div>
         <div class="contact-us mt-5 p-4 border rounded-3 bg-light">
          <h4>Se hai dubbi, puoi scriverci</h4>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Il tuo nome" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="La tua email" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Messaggio</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Scrivi qui il tuo dubbio" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
          </form>
        </div>
    </div>
  );
}

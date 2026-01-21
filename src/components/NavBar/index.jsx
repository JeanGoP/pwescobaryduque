import { useIsMobile } from '../IsMobile';
import './Navbar.css';

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <section>
      <div className="container p-3">
        <div className="row align-items-center gy-2">
          <div className="col-12 col-md-4 d-flex align-items-center contacto">
            <i className="bi bi-envelope-fill fs-3 me-2" style={{ color: '#153f51' }}></i>
            <div>
              <div className="small">comercial2@escobaryduque.com</div>
              <div className="fs-6">Escríbenos</div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex align-items-center contacto contacto-border">
            <i className="bi bi-telephone-fill fs-3 me-2" style={{ color: '#153f51' }}></i>
            <div>
              <div className="small">+57 310 4626657</div>
              <div className="fs-6">Llámanos</div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-md-end">
            <button className="btn-cotizar">COTIZAR</button>
          </div>
        </div>
      </div>

      <div className="navbar d-flex justify-content-center p-0 fw-bold" style={{ backgroundColor: '#153f51', position: 'relative', zIndex: '5' }}>
        <div className="container ">
          <img src="/logo.png" width={200}></img>
          <div className=" gap-2">
            <button className="me-1" style={{ backgroundColor: 'white', padding: '5px 8px' }}>
              <i class="bi bi-facebook fs-6" style={{ color: '#153f51' }}></i>
            </button>
            <button className="me-1" style={{ backgroundColor: 'white', padding: '5px 8px' }}>
              <i class="bi bi-instagram fs-6" style={{ color: '#153f51' }}></i>
            </button>
            <button className="me-1" style={{ backgroundColor: 'white', padding: '5px 8px' }}>
              <i class="bi bi-whatsapp fs-6" style={{ color: '#153f51' }}></i>
            </button>
          </div>
        </div>
      </div>

      <section className="hero22">
        {/* Backgrounds */}
        <div className="hero-bg22 bg-1"></div>
        <div className="hero-bg22 bg-2"></div>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content container text-white ">
          <h1 className="hero-title">PROTEGER LO QUE MÁS IMPORTA</h1>

          <p className="hero-text">
            Somos la garantía de seguridad y respaldo para asegurar lo más valioso en su vida, proporcionando tranquilidad y confianza en cada momento.
          </p>

          <div className="hero-actions d-flex gap-3 flex-wrap">
            <button className="px-4">COTIZAR</button>

            <button href="https://wa.link/h10ydt" target="_blank" rel="noreferrer" className="btn btn-outline-light px-4">
              CONTACTAR UN AGENTE
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

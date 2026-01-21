import './index.css';
import footerLogo from '/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Parte superior */}
      <div className="footer-container">
        <div className="footer-column">
          <h4>Links rápidos</h4>
          <ul>
            <li>
              <a href="/politica-privacidad">Política de Privacidad</a>
            </li>
            <li>
              <a href="/tratamiento-datos">Tratamiento de Datos</a>
            </li>
            <li>
              <a href="/cotizar">Cotizar</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contáctanos</h4>
          <ul className="footer-contact">
            <li>
              <i class="bi bi-geo-alt-fill"></i> Medellín – Antioquia
            </li>
            <li>
              <i class="bi bi-telephone"></i> +57 310 462 6657
            </li>
            <li>
              <i class="bi bi-envelope"></i>comercial2@escobaryduque.com
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Síguenos</h4>

          <div className="footer-socials">
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>

          <div className="footer-subscribe">
            <p>Suscríbete:</p>
            <input type="email" placeholder="Email" />
            <button>ENVIAR</button>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>
          Copyright © 2024. ESCOBAR & DUQUE LTDA All rights reserved. | Design by{' '}
          <a href="https://hakucreativo.co/" target="_blank" rel="noreferrer">
            HakuCreativo
          </a>{' '}
          SAS
        </p>

        <p>
          Development by{' '}
          <a href="http://agenciaidp.com" target="_blank" rel="noreferrer">
            Agencia IDP
          </a>
        </p>

        <img src={footerLogo} alt="Escobar y Duque" />
      </div>
    </footer>
  );
}

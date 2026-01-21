import './index.css';
import profileImg from '../../../public/Carolina.png';

export default function HeroProfesional() {
  return (
    <section className="hero-container">
      <h1 className="hero-title">EXPERIENCIA Y PROFESIONALISMO</h1>

      <div className="hero-contdent">
        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Carolina Rusinque Osorio" className="hero-image" />
        </div>

        <div className="hero-info">
          <h2 className="hero-name">Carolina Rusinque Osorio</h2>

          <div className="hero-emails">
            <p>
              <span className="icon">✉</span>
              escobaryduqueltda@asesorsura.com
            </p>
            <p>
              <span className="icon">✉</span>
              comercial2@escobaryduque.com
            </p>
          </div>

          <button className="hero-button">CONTACTAR</button>
        </div>
      </div>
    </section>
  );
}

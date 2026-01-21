import React from 'react';
import './index.css';

const PartnersSection = () => {
  return (
    <section className="eyd-partners-wrapper">
      <div className="eyd-partners-container">
        {/* Texto */}
        <div className="eyd-partners-text">
          <h3>
            Fiabilidad y <br />
            Confianza en <br />
            Soluciones en <br />
            pólizas
          </h3>
        </div>

        {/* Logos */}
        <div className="eyd-partners-logos">
          <img src="/sura.png" alt="Sura" />
          <img src="/sbs.png" alt="SBS" />
          <img src="/mundial.png" alt="Seguros Mundial" />
          <img src="/colpatria.png" alt="AXA Colpatria" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

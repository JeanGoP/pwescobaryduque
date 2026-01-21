import React from 'react';
import './index.css';

const EscobarDuqueHero = () => {
  return (
    <section className="eydc-wrapper">
      <div className="eydc-content">
        <h1 className="eydc-title">
          ESCOBAR Y DUQUE ES <br /> CONFIANZA
        </h1>

        <p className="eydc-subtitle">Cobertura completa, tranquilidad asegurada.</p>

        <div className="eydc-actions">
          <button className="eydc-btn-primary">CONTACTAR UN AGENTE</button>

          <a href="tel:+573104626657" className="eydc-btn-outline">
            📞 +57310 4626657
          </a>
        </div>
      </div>

      <div className="eydc-visual">
        <img src="/Properties.png" alt="Casa moderna" className="eydc-house" />
      </div>
    </section>
  );
};

export default EscobarDuqueHero;

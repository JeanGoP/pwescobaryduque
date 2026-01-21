import React from 'react';
import './index.css';

const AboutEscobarDuque = () => {
  return (
    <section className="eyd-about-wrapper">
      <div className="eyd-about-container">
        <div className="eyd-about-text">
          <span className="eyd-about-label">Nosotros</span>

          <h2 className="eyd-about-title">ESCOBAR Y DUQUE</h2>

          <p>
            Escobar y Duque es una agencia dedicada a la comercialización de seguros con la finalidad de prestar un acompañamiento integral a todos nuestros
            clientes.
          </p>

          <p>Somos un equipo de trabajo altamente calificado para brindarle al cliente seguridad y respaldo.</p>

          <p>
            Sabemos que cada cliente es diferente al igual que su momento de vida, por eso trabajamos de manera integral y diferenciadora para brindar a cada
            uno de nuestros asegurados un acompañamiento que vaya acorde a sus necesidades.
          </p>

          <div className="eyd-about-features">
            <div className="eyd-feature">
              <h4>Acompañamiento Integral</h4>
              <p>
                Nuestro compromiso es proporcionar un acompañamiento personalizado a cada cliente, ofreciendo soluciones adaptadas a sus necesidades
                particulares.
              </p>
            </div>

            <div className="eyd-feature">
              <h4>Experiencia y Confianza</h4>
              <p>Con más de 12 años en el sector, nuestra agencia cuenta con la experiencia necesaria para brindar servicios confiables y de calidad.</p>
            </div>

            <div className="eyd-feature">
              <h4>Variedad de Servicios Adaptados</h4>
              <p>Ofrecemos una amplia variedad de servicios en pólizas de seguros y asistencias para personas y empresas.</p>
            </div>
          </div>
        </div>

        <div className="eyd-about-visual">
          <img src="/mampapa.jpg" alt="Familia feliz" className="eyd-img-small" />

          <img src="/personasescalera.jpg" alt="Equipo profesional" className="eyd-img-large" />

          <div className="eyd-about-badge">
            <img src="/calificacion.png" alt="Familia feliz" />
            <div style={{ display: 'flex', flexDirection: 'column', padding: '8px' }}>
              <h5>9.2K</h5>
              <span>Clientes Satisfechos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEscobarDuque;

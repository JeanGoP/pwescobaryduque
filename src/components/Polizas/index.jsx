import './index.css';

const polizas = [
  { title: 'Pólizas de Salud', img: '/polizas/salud.jpg' },
  { title: 'Póliza de Automóviles', img: '/polizas/auto.jpg' },
  { title: 'Pólizas de Vida', img: '/polizas/vida.jpg' },
  { title: 'Pólizas Empresariales', img: '/polizas/empresarial.jpg' },
  { title: 'Plan Crédito Protegido', img: '/polizas/credito.jpg' },
  { title: 'Póliza de Hogar', img: '/polizas/hogar.jpg' },
  { title: 'Póliza para Mascotas', img: '/polizas/mascotas.jpg' },
  { title: 'Pólizas de Pensión y Educación', img: '/polizas/pension.jpg' },
];

export default function PolizasIntro() {
  return (
    <section className="polizas-intro">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-9">
            <span className="polizas-tag">Polizas</span>

            <h2 className="polizas-title">LAS MEJORES PÓLIZAS PARA TODO</h2>

            <p className="polizas-text">
              Descubra la tranquilidad que brindan nuestras pólizas personalizadas en Escobar y Duque, ofrecemos soluciones integrales adaptadas a sus
              necesidades únicas. Explore nuestras diversas opciones de seguros para encontrar la cobertura perfecta que respalde cada momento de su vida.
            </p>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
            <button className="btn-asesoria">QUIERO UNA ASESORÍA</button>
          </div>
        </div>

        <div className="row g-4">
          {polizas.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div className="poliza-card">
                <img src={item.img} alt={item.title} />
                <div className="poliza-overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

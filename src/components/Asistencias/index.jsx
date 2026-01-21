import './index.css';

const asistencias = [
  {
    title: 'Telemedicina Médico General',
    text: 'Acceso virtual 24/7 a consultas médicas con médicos generales para atención inmediata y conveniente.',
    img: '/asistencias/1.jpg',
  },
  {
    title: 'Servicio de Ambulancia',
    text: 'Respuesta rápida y traslado a centros hospitalarios en emergencias médicas dentro del ámbito territorial.',
    img: '/asistencias/2.png',
  },
  {
    title: 'Asesoría Legal Telefónica en Caso de Choque o Accidente',
    text: 'Orientación legal inmediata en casos de choque o accidente para respaldo y asistencia jurídica.',
    img: '/asistencias/3.png',
  },
  {
    title: 'Grúa por Accidente o Avería',
    text: 'Servicio de grúa para remolque de vehículos a talleres o lugares seguros tras un accidente o avería.',
    img: '/asistencias/4.png',
  },
  {
    title: 'Transporte de Pasajeros por Accidente o Avería',
    text: 'Movilidad asegurada con servicios de transporte para asegurados y acompañantes en casos de emergencia vial.',
    img: '/asistencias/5.jpg',
  },
];

export default function Asistencias() {
  return (
    <section className="asistencias-section">
      <div className="container">
        {/* HEADER */}
        <div className="asistencias-header mb-5">
          <span className="asistencias-tag">Servicio</span>
          <h2 className="asistencias-title">ASISTENCIAS</h2>
          <p className="asistencias-text">
            Descubre nuestras asistencias exclusivas diseñadas para brindarte tranquilidad en todo momento. Desde telemedicina hasta servicios de grúa y
            asesoría legal, aseguramos tu bienestar en situaciones inesperadas en la carretera y más allá.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-3">
          {asistencias.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg">
              <div className="asistencia-card">
                <img src={item.img} alt={item.title} />
                <div className="asistencia-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-5">
          <button className="btn-terminos">VER TÉRMINOS Y CONDICIONES</button>
        </div>
      </div>
    </section>
  );
}

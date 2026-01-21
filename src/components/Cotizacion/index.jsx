import './index.css';

export default function Cotizacion() {
  return (
    <section className="cotizacion-section">
      <div className="cotizacion-card container">
        <div className="row g-0">
          {/* LADO IZQUIERDO */}
          <div className="col-12 col-lg-4 cotizacion-left d-flex align-items-center">
            <h2>
              Confianza y
              <br />
              excelencia
            </h2>
          </div>

          {/* LADO DERECHO */}
          <div className="col-12 col-lg-8 cotizacion-right">
            <h3>¡Consigue una cotización!</h3>

            <form className="row g-3">
              <div className="col-md-4">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>

              <div className="col-md-4">
                <label>Correo</label>
                <input type="email" className="form-control" placeholder="Correo" />
              </div>

              <div className="col-md-4">
                <label>Celular</label>
                <input type="tel" className="form-control" placeholder="ej: 3122233334" />
              </div>

              <div className="col-md-6">
                <label>Todos los Servicios</label>
                <select className="form-select">
                  <option>Pólizas de Salud</option>
                  <option>Vida</option>
                  <option>Hogar</option>
                  <option>Empresarial</option>
                </select>
              </div>

              <div className="col-md-6">
                <label>Ubicación</label>
                <input type="text" className="form-control" placeholder="Departamento / Municipio / Ciudad" />
              </div>

              <div className="col-12 d-flex justify-content-end">
                <button type="submit" className="btn-enviar">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

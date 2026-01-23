import '../styles/sections/HeroSection.scss';

const HIGHLIGHTS = [
  { title: 'Acompañamiento familiar', description: 'Cuidadores profesionales disponibles 24/7.' },
  { title: 'Modelo Minnesota', description: 'Aplicado por especialistas certificados.' },
  { title: 'Espacios diferenciados', description: 'Sedes independientes para mujeres y hombres.' },
];

export default function HeroSection({ onSelectSede }) {
  return (
    <section className="hero-section" id="inicio" aria-label="Hero">
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <div className="hero-section__callout">
            <span className="hero-section__dot" />
            Tratamiento especializado en adicciones
            <span className="hero-section__detail">— 2 sedes dedicadas</span>
          </div>
          <h1>No estás solo: recuperación integral con cuidado y rigor clínico</h1>
          <p>
            Creamos un entorno seguro para tu familia y aplicamos el Modelo Minnesota con un equipo
            certificado. Te acompañamos en cada paso, desde la primera llamada hasta la
            reintegración.
          </p>
          <div className="hero-section__ctas" role="group" aria-label="Elegir sede">
            <button type="button" className="btn btn--primary" onClick={() => onSelectSede?.('hombres')}>
              Sede Hombres <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="btn btn--primary" onClick={() => onSelectSede?.('mujeres')}>
              Sede Mujeres <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="hero-section__highlights">
            {HIGHLIGHTS.map((item) => (
              <article key={item.title} className="hero-section__highlight">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="hero-section__alert">
            <span>Emergencias:</span> llama al número local de emergencias de tu país.
          </p>
        </div>
        <div className="hero-section__visual" role="presentation">
          <div className="hero-section__float-card">
            <h3>Primera consulta confidencial</h3>
            <p>Diagnóstico detallado y plan clínico avalado por el Modelo Minnesota.</p>
            <div className="hero-section__chips">
              <span>Hombres</span>
              <span className="hero-section__chip--women">Mujeres</span>
            </div>
          </div>
          <p className="hero-section__caption">
            Nuestro compromiso: cuidado humano del arquetipo Cuidador + respaldo clínico del
            arquetipo Sabio.
          </p>
        </div>
      </div>
    </section>
  );
}

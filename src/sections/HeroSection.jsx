import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import info12steps from '../assets/infografia.png';
import '../styles/sections/HeroSection.scss';

const MODEL_FEATURES = [
  {
    title: 'Equipo multidisciplinario',
    description: 'Médicos, psicólogos y consejeros certificados acompañan cada etapa del proceso.',
  },
  {
    title: 'Proceso siempre humano',
    description:
      'La seguridad emocional es prioridad: trabajamos con empatía, respeto y confidencialidad.',
  },
];

const SITE_CARDS = [
  {
    title: 'Sede Masculina',
    detail: '(Zona Pachuca)',
    description: 'Entorno estructurado de disciplina y reconstrucción del propósito personal.',
    tone: 'men',
    sede: 'hombres',
  },
  {
    title: 'Sede Femenina',
    detail: '(Zona Pachuca)',
    description: 'Espacio de contención, seguridad emocional y acompañamiento sororo.',
    tone: 'women',
    sede: 'mujeres',
  },
];

export default function HeroSection({ onSelectSede, onNavigate }) {
  const handleContactClick = () => {
    onNavigate?.('#contacto');
  };

  const handleSiteClick = (sede) => {
    onSelectSede?.(sede);
    onNavigate?.('#contacto');
  };

  return (
    <section className="hero-vista" id="inicio" aria-label="Vista principal clínica Pachuca">
      <div className="container">
        <header className="hero-vista__header">
          <p>CONCIENCIA CAI</p>
          <h1 className="eyebrow">Clínica de Rehabilitación Pachuca</h1>
        </header>

        <div className="hero-vista__panel">
          <figure className="hero-vista__photo hero-vista__photo--men">
            <img src={photoMen} alt="Atención profesional en la sede varonil" loading="lazy" />
            <figcaption>Espacio varonil</figcaption>
          </figure>
          <div className="hero-vista__copy">
            <div className="hero-vista__badge">Proceso residencial 4 meses</div>
            <p>
              Contamos con un equipo multidisciplinario y un modelo terapéutico basado en el Modelo Minnesota y el Programa de 12 Pasos, que nos permite acompañarte paso a paso durante todo el proceso. Aquí no tratamos casos: acompañamos personas y a sus familias, siempre desde la confidencialidad, el respeto y el trato digno.
            </p>

            <div className="hero-vista__stats">
              <div>
                <strong>Sedes independientes</strong>
                <p>
                  Un espacio seguro para cuidar a las personas y a sus familias.
                </p>
              </div>

            </div>
            <div className="hero-vista__cta-group">
              <button type="button" className="btn btn--primary" onClick={handleContactClick}>
                Solicitar valoración
              </button>
            </div>
          </div>

          <figure className="hero-vista__photo hero-vista__photo--women">
            <img src={photoWomen} alt="Proceso terapéutico en la sede femenil" loading="lazy" />
            <figcaption>Espacio femenil</figcaption>
          </figure>
        </div>

        <section className="hero-model" id="metodo" aria-label="Modelo terapéutico">
          <div className="hero-model__header">
            <h3>¿Cómo funciona nuestro modelo?</h3>
            <p>
              Integramos el Modelo Minnesota con el Programa de 12 Pasos para ofrecer un proceso
              residencial estructurado, humano y clínicamente sólido. Cada residente avanza con
              acompañamiento terapéutico y contención familiar.
            </p>
          </div>
          <div className="hero-model__grid">
            <article className="hero-model__card hero-model__card--media">
              <h4>Modelo Minnesota</h4>
              <div className="hero-model__media">
                <figure className="hero-vista__photo">
                  <img src={info12steps} alt="Atención profesional en la sede varonil" loading="lazy" />
                  <figcaption>Método 12 pasos</figcaption>
                </figure>
              </div>
            </article>
            {MODEL_FEATURES.map((feature) => (
              <article key={feature.title} className="hero-model__card">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="hero-vista__sites">
          {SITE_CARDS.map((site) => (
            <article
              key={site.title}
              className={`hero-vista__site-card hero-vista__site-card--${site.tone}`}
            >
              <header>
                <p className="eyebrow">{site.detail}</p>
                <h3>{site.title}</h3>
              </header>
              <p>{site.description}</p>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => handleSiteClick(site.sede)}
              >
                Contactar {site.tone === 'men' ? 'sede varonil' : 'sede femenil'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

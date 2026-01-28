import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import '../styles/sections/SedeRouteSection.scss';

const SEDE_VIEWS = [
  {
    tone: 'men',
    sede: 'hombres',
    eyebrow: 'Sede masculina',
    title: 'Ruta disciplinada y guiada por el propósito',
    intro:
      'Espacio residencial con horarios claros, acompañamiento clínico permanente y retos diseñados para reconstruir hábitos saludables.',
    focus: [
      'Supervisión clínica y consejería 24/7.',
      'Programa ocupacional y de activación física diaria.',
      'Sesiones de responsabilidad y liderazgo terapéutico.',
    ],
    rituals: ['Despertar guiado y agenda terapéutica', 'Trabajo de 12 Pasos y grupos de proceso', 'Evaluación nocturna y bitácora personal'],
    quote: '“Orden y contención para volver a confiar en ti”.',
    photo: photoMen,
  },
  {
    tone: 'women',
    sede: 'mujeres',
    eyebrow: 'Sede femenina',
    title: 'Ruta sororal enfocada en seguridad emocional',
    intro:
      'Casa-terapia con ambientes acogedores, acompañamiento psicológico especializado y espacios de sororidad para sanar en confianza.',
    focus: [
      'Habitaciones, áreas comunes y jardines supervisados.',
      'Círculos terapéuticos sororales y talleres de autocuidado.',
      'Acompañamiento familiar y resignificación del proyecto de vida.',
    ],
    rituals: ['Bienvenida y ritual de contención matutino', 'Talleres creativos y grupos psicoeducativos', 'Círculo vespertino de apoyo y agradecimiento'],
    quote: '“Te abrazamos con calidez, te guiamos con claridad”.',
    photo: photoWomen,
  },
];

export default function SedeRouteSection({ onSelectSede, onNavigate, onViewSede }) {
  const handleCTA = (sede) => {
    onSelectSede?.(sede);
    onNavigate?.('#contacto');
  };

  const handleInfo = (tone) => {
    onViewSede?.(tone);
  };

  return (
    <section className="sede-route" id="ruta-color" aria-label="Ruta de color para cada sede">
      <div className="container">
        <header className="sede-route__header">
          <p className="eyebrow">Ruta de color</p>
          <h2>Dos rutas complementarias que reflejan a nuestros arquetipos</h2>
          <p className="text-muted">
            Las sedes se diferencian por ambientes, colores y rituales pensados para cada proceso.
            Ambas comparten la ética del Cuidador y la sabiduría clínica del Sabio.
          </p>
        </header>

        <div className="sede-route__grid">
          {SEDE_VIEWS.map((view) => (
            <article
              key={view.tone}
              className={`sede-route__view sede-route__view--${view.tone}`}
              data-theme={view.tone}
            >
              <div className="sede-route__path" aria-hidden="true">
                <span />
              </div>
              <div className="sede-route__copy">
                <p className="sede-route__eyebrow">{view.eyebrow}</p>
                <h3>{view.title}</h3>
                <p>{view.intro}</p>
                <ul className="sede-route__focus" role="list">
                  {view.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="sede-route__rituals">
                  <p className="sede-route__rituals-title">Ritmo diario</p>
                  <ul role="list">
                    {view.rituals.map((ritual) => (
                      <li key={ritual}>{ritual}</li>
                    ))}
                  </ul>
                </div>
                <blockquote>
                  <p>{view.quote}</p>
                </blockquote>
                <div className="sede-route__cta">
                  <button type="button" className="btn btn--primary" onClick={() => handleCTA(view.sede)}>
                    Hablar con un especialista
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => handleInfo(view.tone === 'men' ? 'men' : 'women')}
                  >
                    Información de la sede
                  </button>
                </div>
              </div>
              <figure className="sede-route__media">
                <img src={view.photo} alt={`Vista representativa de la ${view.eyebrow}`} loading="lazy" />
                <figcaption>{view.eyebrow}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

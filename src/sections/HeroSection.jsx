import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import teamMeeting from '../assets/Team-Meeting-in-Hospitals-Clinics.webp';
import humanProcess from '../assets/humanProcess.webp';
import info12steps from '../assets/infografia.webp';
import '../styles/sections/HeroSection.scss';

const MODEL_FEATURES = [
  {
    title: 'Equipo multidisciplinario',
    description: 'Médicos, psicólogos y consejeros certificados acompañan cada etapa del proceso.',
    image: teamMeeting,
    caption: 'Equipo clínico y terapéutico en sesión',
  },
  {
    title: 'Proceso siempre humano',
    description:
      'La seguridad emocional es prioridad: trabajamos con empatía, respeto y confidencialidad.',
    image: humanProcess,
    caption: 'Acompañamiento y contención emocional',
  },
];

const SITE_CARDS = [
  {
    title: 'Sede Masculina',
    description: 'Entorno estructurado de disciplina y reconstrucción del propósito personal.',
    tone: 'men',
    sede: 'hombres',
  },
  {
    title: 'Sede Femenina',
    description: 'Espacio de contención, seguridad emocional y acompañamiento solidario.',
    tone: 'women',
    sede: 'mujeres',
  },
];

export default function HeroSection({ onNavigate, onOpenPrivacy }) {
  const handleContactClick = () => {
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
                <figure className="hero-vista__photo">
                  <img src={info12steps} alt="Atención profesional en la sede varonil" loading="lazy" />
                  <figcaption>Principios terapéuticos</figcaption>
                </figure>
            </article>
            {MODEL_FEATURES.map((feature) => (
              <article key={feature.title} className="hero-model__card">
                <h4>{feature.title}</h4>
                <figure className="hero-model__photo">
                  <img src={feature.image} alt={feature.caption} loading="lazy" />
                  <figcaption>{feature.caption}</figcaption>
                </figure>
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
                <h3>{site.title}</h3>
              </header>
              <p>{site.description}</p>
              <button
                type="button"
                className="btn btn--secondary hero-sites__btn"
                onClick={() => onNavigate?.('#contacto')}
              >
                <span>{site.tone === 'men' ? 'Sede Varonil' : 'Sede Femenil'}</span>
              </button>
            </article>
          ))}
        </div>

        <section className="hero-contact" id="contacto" aria-label="Contacto y valoración">
          <div className="hero-contact__copy">
            <h2>Dar el primer paso</h2>
            <h3>Agenda una valoración confidencial</h3>
            <p>
              Completa el formulario y un especialista se comunicará contigo desde la sede
              correspondiente. Toda la información es tratada con absoluta privacidad.
              <button type="button" className="hero-contact__link" onClick={onOpenPrivacy}>
                Leer aviso
              </button>
            </p>
          </div>
          <form className="hero-contact__form">
            <label className="field">
              <span>Nombre</span>
              <input type="text" name="name" placeholder="Nombre completo" required />
            </label>
            <label className="field">
              <span>Teléfono</span>
              <input type="tel" name="phone" placeholder="10 dígitos" required />
            </label>
            <label className="field">
              <span>Sede de interés</span>
              <select name="sede" required>
                <option value="">Selecciona una opción</option>
                <option value="mujeres">Sede Femenina</option>
                <option value="hombres">Sede Masculina</option>
              </select>
            </label>
            <label className="field field--full">
              <span>Mensaje</span>
              <textarea name="message" rows={4} placeholder="Cuéntanos cómo podemos ayudarte" />
            </label>
            <div className="hero-contact__actions">
              <p>Atención personalizada 24/7</p>
              <button type="submit" className="btn btn--primary">
                Enviar solicitud
              </button>
            </div>
          </form>
        </section>

        <footer className="hero-footer">
          <nav className="hero-footer__nav" aria-label="Enlaces secundarios">
            <a href="#inicio">Inicio</a>
            <a href="#metodo">Método</a>
            <button type="button" className="hero-footer__link" onClick={onOpenPrivacy}>
              Privacidad
            </button>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Redes
            </a>
          </nav>
          <p className="hero-footer__note">© {new Date().getFullYear()}, MR reserved.</p>
        </footer>
      </div>
    </section>
  );
}

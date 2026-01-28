import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import info12steps from '../assets/infografia.webp';
import '../styles/components/HeroGallery.scss';

const DEFAULT_PROMISES = [
  {
    title: 'Supervisión clínica 24/7',
    description: 'Guardias médicas y terapéuticas permanentes para responder ante cualquier eventualidad.',
  },
  {
    title: 'Plan terapéutico personalizado',
    description: 'Evaluaciones periódicas y ajuste de objetivos con base en la respuesta de cada residente.',
  },
  {
    title: 'Acompañamiento familiar',
    description: 'Sesiones educativas y de contención para integrar a la familia durante todo el proceso.',
  },
];

/**
 * HeroGallery
 * - Props: `promises` (array [{ title, description }]).
 * - Reemplaza los assets en heroAssets.js cuando tengas fotografías reales.
 */
export default function HeroGallery({ promises = DEFAULT_PROMISES }) {
  return (
    <div className="hero-vista__gallery" aria-label="Espacios de internamiento">
      <figure className="hero-vista__media hero-vista__media--men">
        <img src={photoMen} alt="Atención profesional en la sede masculina" loading="lazy" />
        <figcaption>Sede masculina</figcaption>
      </figure>
      <article className="hero-vista__trust-card">
        <p className="hero-vista__trust-eyebrow">Modelo terapéutico</p>
        <h3>Guía clínica con sentido humano</h3>
        <p>
          Nuestro Modelo Minnesota, integrado al Programa de 12 Pasos, combina ciencia médica,
          psicología y espiritualidad para acompañar cada etapa.
        </p>
        <ul role="list">
          {promises.map((promise) => (
            <li key={promise.title}>
              <strong>{promise.title}</strong>
              <span>{promise.description}</span>
            </li>
          ))}
        </ul>
        <figure className="hero-vista__diagram">
          <img
            src={info12steps}
            alt="Infografía del Modelo Minnesota y los 12 Pasos"
            loading="lazy"
          />
        </figure>
      </article>
      <figure className="hero-vista__media hero-vista__media--women">
        <img src={photoWomen} alt="Proceso terapéutico en la sede femenina" loading="lazy" />
        <figcaption>Sede femenina</figcaption>
      </figure>
    </div>
  );
}

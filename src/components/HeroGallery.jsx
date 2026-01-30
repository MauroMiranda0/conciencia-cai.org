import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import info12steps from '../assets/infografia.webp';
import {
  HeroCallToActionMen,
  HeroCallToActionWomen,
} from './HeroCallToActions.jsx';

import '../styles/components/HeroGallery.scss';

const DEFAULT_PROMISES = [
  {
    title: 'Supervisión clínica 24/7',
    description:
      'Guardias médicas y terapéuticas permanentes para responder ante cualquier eventualidad.',
  },
  {
    title: 'Plan terapéutico personalizado',
    description:
      'Evaluaciones periódicas y ajuste de objetivos con base en la respuesta de cada residente.',
  },
  {
    title: 'Acompañamiento familiar',
    description:
      'Sesiones educativas y de contención para integrar a la familia durante todo el proceso.',
  },
];

const DEFAULT_SITES = [
  {
    focus: 'Modelo residencial · Varonil',
    title: 'Sede Masculina',
    description: 'Entorno estructurado para reconstruir hábitos, propósito y responsabilidad.',
    tone: 'men',
    sede: 'hombres',
    highlights: [
      'Supervisión clínica 24/7',
      'Integración familiar programada',
      'Programa individual terapéutico',
    ],
  },
  {
    focus: 'Modelo residencial · Femenil',
    title: 'Sede Femenina',
    description: 'Espacio de contención, seguridad emocional y acompañamiento solidario.',
    tone: 'women',
    sede: 'mujeres',
    highlights: [
      'Equipo especializado en mujeres',
      'Acompañamiento emocional continuo',
      'Programa integral de 12 pasos',
    ],
  },
];

/**
 * HeroGallery
 * - Props: `promises` (array [{ title, description }]).
 * - `sites` (array para HeroCallToActions).
 * - Reemplaza los assets en heroAssets.js cuando tengas fotografías reales.
 */
export default function HeroGallery({
  promises = DEFAULT_PROMISES,
  sites = DEFAULT_SITES,
  onNavigate,
  onSelectSede,
}) {
  const menSite = sites.find((site) => site.tone === 'men') ?? sites[0];
  const womenSite =
    sites.find((site) => site.tone === 'women') ??
    sites.find((site) => site !== menSite) ??
    sites[1];

  const handleContactSite = (sede) => {
    if (sede) {
      onSelectSede?.(sede);
    }
    onNavigate?.('#contacto');
  };

  const handleViewSede = () => {
    onNavigate?.('#sedes');
  };

  return (
    <div className="hero-vista__gallery" aria-label="Espacios de internamiento">

      <div className="hero-vista__container">
        <figure className="hero-vista__media hero-vista__media--men">
          <img src={photoMen} alt="Atención profesional en la sede masculina" loading="lazy" />
          <figcaption>Sede masculina</figcaption>
        </figure>
        <HeroCallToActionMen
          site={menSite}
          onContactSite={handleContactSite}
          onViewSede={handleViewSede}
        />
      </div>

      <div>
        <article className="hero-vista__trust-card">
          <p className="hero-vista__trust-eyebrow">Modelo terapéutico</p>
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
      </div>
      <div className="hero-vista__container">
        <figure className="hero-vista__media hero-vista__media--women">
          <img src={photoWomen} alt="Proceso terapéutico en la sede femenina" loading="lazy" />
          <figcaption>Sede femenina</figcaption>
        </figure>
        <HeroCallToActionWomen
          site={womenSite}
          onContactSite={handleContactSite}
          onViewSede={handleViewSede}
        />
      </div>
    </div>
  );
}

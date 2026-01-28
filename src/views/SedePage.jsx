import { useEffect } from 'react';
import MethodSection from '../sections/MethodSection.jsx';
import IdentitySection from '../sections/IdentitySection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import photoMen from '../assets/Therapy-for-Men-1.webp';
import photoWomen from '../assets/Therapy-for-Women-1.jpg';
import humanProcess from '../assets/humanProcess.webp';
import teamMeeting from '../assets/Team-Meeting-in-Hospitals-Clinics.webp';
import info12steps from '../assets/infografia.webp';
import '../styles/sections/SedePage.scss';

const SEDE_CONTENT = {
  men: {
    route: '/sede/varonil',
    sedeValue: 'hombres',
    eyebrow: 'Sede varonil · Pachuca, Hidalgo',
    title: 'Estructura residencial para recuperar el propósito',
    lead:
      'Rutinas terapéuticas guiadas, acompañamiento clínico permanente y espacios diseñados para fortalecer la responsabilidad personal.',
    highlights: [
      'Supervisión médica y terapéutica 24/7.',
      'Programa ocupacional y activación física diaria.',
      'Consejeros certificados que trabajan con la familia.',
    ],
    gallery: [
      { src: photoMen, alt: 'Área residencial de la sede varonil' },
      { src: teamMeeting, alt: 'Equipo clínico planificando sesiones para la sede varonil' },
      { src: info12steps, alt: 'Principios del Modelo Minnesota aplicados en la sede varonil' },
    ],
    about: {
      title: 'Nuestro enfoque para hombres',
      paragraphs: [
        'La rutina está diseñada para que cada residente recupere disciplina, orden y sentido de responsabilidad. Integramos espacios de activación física, trabajo terapéutico y reflexiones personales.',
        'El acompañamiento familiar es clave: mantenemos comunicación constante con los responsables del proceso para alinear expectativas y construir acuerdos de egreso.',
      ],
      bullets: [
        'Sesiones de responsabilidad y liderazgo terapéutico.',
        'Plan de hábitos personales y bitácora nocturna.',
        'Apoyo espiritual y psicoeducativo diario.',
      ],
    },
    map: {
      label: 'Ubicación sede varonil · Col. Periodistas, Pachuca',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6466459988193!2d-98.73985222476762!3d20.669208300069548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a83b41234567%3A0xd511c42acafe1!2sPachuca%20de%20Soto%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx',
    },
    other: {
      route: '/sede/femenil',
      label: 'Ver la sede femenil',
    },
  },
  women: {
    route: '/sede/femenil',
    sedeValue: 'mujeres',
    eyebrow: 'Sede femenil · Pachuca, Hidalgo',
    title: 'Entorno seguro con contención emocional y sororidad',
    lead:
      'Casa-terapia enfocada en brindar seguridad, acompañamiento psicológico y espacios sororales para sanar en confianza.',
    highlights: [
      'Habitaciones y áreas comunes supervisadas.',
      'Círculos terapéuticos sororales y talleres creativos.',
      'Acompañamiento familiar enfocado en la contención.',
    ],
    gallery: [
      { src: photoWomen, alt: 'Habitaciones y áreas comunes de la sede femenil' },
      { src: humanProcess, alt: 'Procesos terapéuticos humanistas en la sede femenil' },
      { src: info12steps, alt: 'Aplicación del Modelo Minnesota en la sede femenil' },
    ],
    about: {
      title: 'Nuestro enfoque para mujeres',
      paragraphs: [
        'Creamos espacios íntimos, cálidos y supervisados para que cada residente se sienta contenida y acompañada desde el primer día.',
        'Fortalecemos la sororidad entre residentes para que compartan experiencias y aprendan herramientas emocionales que sostengan la recuperación al egresar.',
      ],
      bullets: [
        'Rituales de contención emocional matutinos y nocturnos.',
        'Talleres de autocuidado y expresión creativa.',
        'Sesiones familiares con enfoque en seguridad emocional.',
      ],
    },
    map: {
      label: 'Ubicación sede femenil · Zona norte, Pachuca',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6466459988193!2d-98.73985222476762!3d20.669208300069548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a83b89abcdef%3A0xd511c42acafe2!2sPachuca%20de%20Soto%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1700000000001!5m2!1ses-419!2smx',
    },
    other: {
      route: '/sede/varonil',
      label: 'Ver la sede varonil',
    },
  },
};

export default function SedePage({
  variant = 'men',
  onNavigate,
  onRouteChange,
  onOpenPrivacy,
  onSelectSede,
}) {
  const config = SEDE_CONTENT[variant];
  if (!config) return null;

  useEffect(() => {
    onSelectSede?.(config.sedeValue);
  }, [config.sedeValue, onSelectSede]);

  const handleContactClick = () => {
    onSelectSede?.(config.sedeValue);
    onNavigate?.('#contacto');
  };

  const handleRouteSwap = () => {
    onRouteChange?.(config.other.route);
  };

  return (
    <>
      <section className="sede-hero" aria-label={`Hero sede ${config.sedeValue}`}>
        <div className="container sede-hero__layout">
          <div className="sede-hero__copy">
            <p className="eyebrow">{config.eyebrow}</p>
            <h1>{config.title}</h1>
            <p className="sede-hero__lead">{config.lead}</p>
            <ul className="sede-hero__highlights" role="list">
              {config.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="sede-hero__cta">
              <button type="button" className="btn btn--primary" onClick={handleContactClick}>
                Hablar con la sede
              </button>
              <button type="button" className="btn btn--alt" onClick={handleRouteSwap}>
                {config.other.label}
              </button>
            </div>
            <p className="sede-hero__microcopy">Atención confidencial · Respuesta en minutos</p>
          </div>
          <div className="sede-hero__media-grid" aria-label="Galería destacada de la sede">
            {config.gallery.map((item) => (
              <figure key={item.alt} className="sede-hero__media-card">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <MethodSection />

      <section className="sede-about" id="acerca-de" aria-label="Acerca de la sede">
        <div className="container sede-about__layout">
          <div className="sede-about__copy">
            <p className="eyebrow">Acerca de nosotros</p>
            <h2>{config.about.title}</h2>
            {config.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="sede-about__panel">
            <h3>Lo que reforzamos cada día</h3>
            <ul>
              {config.about.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <IdentitySection />

      <ContactSection
        selectedSede={config.sedeValue}
        onSelectSede={onSelectSede}
        onOpenPrivacy={onOpenPrivacy}
        lockSede
        mapEmbedUrl={config.map.src}
        mapLabel={config.map.label}
      />
    </>
  );
}

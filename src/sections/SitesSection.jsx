import SiteCard from '../components/SiteCard.jsx';
import '../styles/sections/SitesSection.scss';

const SITES = [
  {
    tone: 'women',
    sede: 'mujeres',
    title: 'Sede Femenina',
    subtitle: 'Contención sororal y protección emocional',
    description:
      'Espacio residencial diseñado como casa-terapia para acompañar procesos de mujeres y sus familias.',
    location: 'Zona residencial norte de Pachuca, Hidalgo',
    points: [
      'Equipo clínico con enfoque en salud mental femenina.',
      'Círculos terapéuticos y actividades de autocuidado.',
      'Acompañamiento familiar con énfasis en la sororidad.',
    ],
  },
  {
    tone: 'men',
    sede: 'hombres',
    title: 'Sede Masculina',
    subtitle: 'Estructura y sentido de propósito',
    description:
      'Entorno residencial con disciplina acompañada, enfoque en responsabilidad personal y liderazgo.',
    location: 'Corredor sur de Pachuca, Hidalgo',
    points: [
      'Rutinas terapéuticas y ocupacionales guiadas.',
      'Supervisión clínica las 24 horas.',
      'Trabajo terapéutico con enfoque en proyecto de vida.',
    ],
  },
];

export default function SitesSection({ onSelectSede, onViewSede }) {
  return (
    <section className="sites-section" id="sedes" aria-label="Sedes especializadas en Pachuca">
      <div className="container">
        <header className="sites-section__header">
          <p className="eyebrow">Espacios seguros en Pachuca</p>
          <h2>Cuidamos desde lugares que reflejan la calidez del Cuidador y la claridad del Sabio</h2>
          <p>
            Cada sede cuenta con equipos completos, protocolos de confidencialidad y espacios
            adaptados a las necesidades emocionales de hombres y mujeres. Ambas comparten el mismo
            estándar clínico y la misma filosofía de dignidad humana.
          </p>
        </header>
        <div className="sites-section__grid">
          {SITES.map((site, index) => (
            <SiteCard
              key={site.title}
              {...site}
              onSelect={onSelectSede}
              onView={(tone) => onViewSede?.(tone === 'men' ? 'men' : 'women')}
              className={`reveal reveal--delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

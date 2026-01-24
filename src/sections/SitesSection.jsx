import SiteCard from '../components/SiteCard.jsx';
import '../styles/sections/SitesSection.scss';

const SITES = [
  {
    tone: 'women',
    sede: 'mujeres',
    title: 'Sede Femenil',
    description: 'Un espacio de contención, respeto y acompañamiento emocional.',
    location: 'Pachuca, Hidalgo',
  },
  {
    tone: 'men',
    sede: 'hombres',
    title: 'Sede Varonil',
    description:
      'Un entorno estructurado enfocado en la responsabilidad personal y la reconstrucción del propósito.',
    location: 'Pachuca, Hidalgo',
  },
];

export default function SitesSection({ onSelectSede }) {
  return (
    <section className="sites-section" id="sedes" aria-label="Sedes especializadas en Pachuca">
      <div className="container">
        <header className="sites-section__header">
          <p className="eyebrow">Pachuca, Hidalgo</p>
          <h2>Dos sedes especializadas, un mismo compromiso de cuidado</h2>
          <p>
            Contamos con dos sedes físicas completamente independientes en Pachuca: una Sede Varonil
            y una Sede Femenil. Esta estructura no divide nuestro modelo terapéutico, sino que lo
            fortalece al permitir entornos seguros, respetuosos y especializados según las
            necesidades emocionales y terapéuticas de cada género.
          </p>
          <p className="text-muted">
            Ambas sedes operan bajo el mismo estándar clínico, ético y humano.
          </p>
        </header>
        <div className="sites-section__grid">
          {SITES.map((site, index) => (
            <SiteCard
              key={site.title}
              {...site}
              onSelect={onSelectSede}
              className={`reveal reveal--delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

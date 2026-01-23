import SiteCard from '../components/SiteCard.jsx';
import '../styles/sections/SitesSection.scss';

const SITES = [
  {
    tone: 'men',
    sede: 'hombres',
    title: 'Sede Hombres',
    description: 'Espacio de estructura, disciplina y reconstrucción personal.',
    location: 'Ubicación: (pendiente zona/colonia)',
  },
  {
    tone: 'women',
    sede: 'mujeres',
    title: 'Sede Mujeres',
    description: 'Espacio de contención, sanación emocional y acompañamiento.',
    location: 'Ubicación: (pendiente zona/colonia)',
  },
];

export default function SitesSection({ onSelectSede }) {
  return (
    <section className="sites-section" id="sedes" aria-label="Nuestras sedes en Pachuca">
      <div className="container">
        <header className="sites-section__header">
          <p className="eyebrow">Pachuca, Hidalgo</p>
          <h2>Nuestras sedes en Pachuca</h2>
          <p className="text-muted">
            Ubicaciones independientes para garantizar seguridad, privacidad y un enfoque
            terapéutico especializado por sede.
          </p>
        </header>
        <div className="sites-section__grid">
          {SITES.map((site) => (
            <SiteCard key={site.title} {...site} onSelect={onSelectSede} />
          ))}
        </div>
      </div>
    </section>
  );
}

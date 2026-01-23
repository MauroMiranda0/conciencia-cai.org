import InfoCard from '../components/InfoCard.jsx';
import '../styles/sections/MethodSection.scss';

const CARDS = [
  {
    title: 'Dignidad y contención',
    text: 'Tratamiento centrado en la persona, con seguridad emocional desde el primer contacto.',
  },
  {
    title: 'Equipo multidisciplinario',
    text: 'Médicos, psicólogos y terapeutas en un proceso clínico supervisado.',
  },
  {
    title: '12 Pasos + ciencia médica',
    text: 'Integración del programa de 12 pasos con estructura terapéutica profesional.',
  },
];

export default function MethodSection() {
  return (
    <section className="method-section" id="metodo" aria-label="Método Minnesota">
      <div className="container">
        <header className="method-section__header">
          <h2>El Método Minnesota</h2>
          <p className="text-muted">
            Un estándar clínico estructurado, basado en dignidad humana y acompañamiento
            multidisciplinario.
          </p>
        </header>
        <div className="method-section__grid">
          {CARDS.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

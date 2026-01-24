import InfoCard from '../components/InfoCard.jsx';
import '../styles/sections/MethodSection.scss';

const CARDS = [
  {
    title: 'Modelo Minnesota',
    text:
      'Enfoque reconocido internacionalmente que integra ciencia médica, atención psicológica y trabajo terapéutico estructurado.',
  },
  {
    title: 'Internamiento residencial de 4 meses',
    text: 'Proceso diseñado para atender la dimensión clínica y emocional del paciente.',
  },
  {
    title: 'Programa de 12 Pasos',
    text: 'Trabajo terapéutico guiado que fortalece la recuperación y el proyecto de vida.',
  },
];

const TEAM = [
  'Equipo multidisciplinario de médicos, psicólogos y consejeros certificados en adicciones.',
  'Acompañamiento clínico bajo la guía de especialistas con formación y experiencia comprobada.',
  'Consejero certificado José Alberto Porraz Juárez.',
];

export default function MethodSection() {
  return (
    <section className="method-section" id="metodo" aria-label="Modelo Minnesota">
      <div className="container">
        <header className="method-section__header">
          <p className="eyebrow">Modelo terapéutico</p>
          <h2>Un modelo terapéutico con fundamento clínico y sentido humano</h2>
          <p className="text-muted">
            Nuestro programa de internamiento residencial integra el Modelo Minnesota con el
            Programa de 12 Pasos, para responder a las necesidades médicas, psicológicas y
            emocionales de cada residente.
          </p>
        </header>
        <div className="method-section__content">
          <div className="method-section__text reveal">
            <p>
              En <strong>Conciencia CAI</strong>, este modelo se desarrolla a lo largo de un proceso
              residencial de <strong>4 meses</strong>, cuidadosamente diseñado para atender tanto
              la dimensión clínica como la emocional del paciente.
            </p>
            <p>
              Cada residente es acompañado por un equipo multidisciplinario de médicos, psicólogos y
              consejeros certificados en adicciones, bajo la guía de especialistas con formación y
              experiencia comprobada.
            </p>
            <blockquote className="method-section__quote">
              <p>
                Nuestro objetivo no es solo la abstinencia, sino la recuperación integral de la
                persona y su proyecto de vida.
              </p>
            </blockquote>
          </div>
          <div className="method-section__grid">
            {CARDS.map((card, index) => (
              <InfoCard
                key={card.title}
                {...card}
                className={`reveal reveal--delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="method-section__panel reveal">
          <h3>Equipo clínico y acompañamiento</h3>
          <ul>
            {TEAM.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import '../styles/sections/IdentitySection.scss';

const VALUES = [
  {
    title: 'Dignidad humana',
    text: 'Cada persona es tratada con respeto, cuidado y sensibilidad, sin juicios ni estigmas.',
  },
  {
    title: 'Responsabilidad',
    text: 'Acompañamos al residente en el desarrollo de un compromiso real con su proceso terapéutico.',
  },
  {
    title: 'Profesionalismo',
    text: 'Nuestro equipo está conformado por médicos, psicólogos y consejeros certificados en constante capacitación.',
  },
  {
    title: 'Sororidad y fraternidad',
    text: 'Creamos entornos especializados por género que fomentan el apoyo mutuo y la seguridad emocional.',
  },
  {
    title: 'Integridad y transparencia',
    text: 'Actuamos con ética, claridad y responsabilidad en cada etapa del tratamiento.',
  },
];

export default function IdentitySection() {
  return (
    <section className="identity-section" id="identidad" aria-label="Misión, visión y valores">
      <div className="container">
        <header className="identity-section__header">
          <h2>Nuestra misión, visión y valores</h2>
          <p>
            Somos una organización que abraza el arquetipo del Cuidador y del Sabio: cuidamos con
            calidez y guiamos con conocimiento clínico.
          </p>
        </header>
        <div className="identity-section__grid">
          <article className="identity-card reveal">
            <h3>Nuestra misión</h3>
            <p>
              Brindar acompañamiento profesional, ético y humano a personas y familias que viven un
              proceso de adicciones, a través de internamiento residencial integral basado en el
              Modelo Minnesota.
            </p>
            <p>
              Integramos la ciencia médica, la intervención psicológica y el trabajo terapéutico
              estructurado para facilitar procesos de recuperación sostenidos, desde el respeto a la
              dignidad humana y la contención emocional.
            </p>
          </article>
          <article className="identity-card reveal">
            <h3>Nuestra visión</h3>
            <p>
              Ser un referente en el estado de Hidalgo por la seriedad, efectividad y calidez de
              nuestro modelo de atención. Aspiramos a que <strong>Conciencia CAI</strong> sea
              reconocido como un espacio seguro y confiable, donde la experiencia clínica y el
              trato humano caminan juntos hacia la restauración de la salud física y emocional.
            </p>
          </article>
        </div>
        <div className="identity-section__values">
          <h3 className="identity-section__subtitle">Nuestros valores</h3>
          <div className="identity-section__values-grid">
            {VALUES.map((value) => (
              <article key={value.title} className="value-card reveal">
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

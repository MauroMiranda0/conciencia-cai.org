import '../styles/components/Modal.scss';

const MODEL_PILLARS = [
  {
    title: 'Evaluación integral',
    description:
      'Diagnóstico médico, psicológico y familiar que determina el nivel de severidad y el plan personalizado.',
  },
  {
    title: 'Intervención interdisciplinaria',
    description:
      'Médicos, psiquiatras, psicólogos, consejeros y facilitadores espirituales colaboran diariamente.',
  },
  {
    title: '12 Pasos con acompañamiento clínico',
    description:
      'Se integran herramientas espirituales, científicas y conductuales con objetivos semanales medibles.',
  },
];

const PROGRAM_PHASES = [
  {
    title: 'Detox y estabilización',
    copy:
      'Supervisión médica 24/7, protocolos de seguridad y contención emocional para reducir riesgos y ansiedad.',
  },
  {
    title: 'Profundización terapéutica',
    copy:
      'Sesiones individuales, grupales y de familia que abordan detonantes, dinámicas afectivas y hábitos críticos.',
  },
  {
    title: 'Integración familiar',
    copy:
      'Escuelas para familias, acuerdos de acompañamiento y detección temprana de recaídas con guías claras.',
  },
  {
    title: 'Transición y seguimiento',
    copy:
      'Plan de alta, red de apoyo externo y seguimiento virtual para asegurar adherencia durante los primeros 90 días.',
  },
];

const PRACTICES = [
  'Rituales terapéuticos diarios (inventario, gratitud y servicio).',
  'Congruencia entre sesiones clínicas y tareas de 12 Pasos.',
  'Bitácora de progreso compartida con la familia autorizada.',
  'Uso de métricas de craving, sueño y estado de ánimo.',
  'Capacitaciones laborales y de propósito personal.',
];

const DOWNLOAD_PATH = '/docs/modelo-minnesota.pdf';

export default function ModelModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Modelo Minnesota y 12 Pasos"
    >
      <div className="modal-card modal-card--info">
        <header className="modal-card__header">
          <p className="modal-card__eyebrow">Modelo Minnesota · Conciencia CAI</p>
          <h2>Guía clínica basada en evidencia y sentido humano</h2>
          <p className="modal-card__lede">
            Adaptamos el Modelo Minnesota y los 12 Pasos a un entorno residencial en Pachuca. Cada
            residente avanza con evaluaciones clínicas semanales, acompañamiento espiritual y un
            plan familiar activo.
          </p>
        </header>
        <div className="modal-card__body">
          <section className="modal-card__group">
            <h3>Pilares terapéuticos</h3>
            <ul>
              {MODEL_PILLARS.map((pillar) => (
                <li key={pillar.title}>
                  <strong>{pillar.title}:</strong> {pillar.description}
                </li>
              ))}
            </ul>
          </section>
          <section className="modal-card__group">
            <h3>Etapas del programa</h3>
            <ul>
              {PROGRAM_PHASES.map((phase) => (
                <li key={phase.title}>
                  <strong>{phase.title}:</strong> {phase.copy}
                </li>
              ))}
            </ul>
          </section>
          <section className="modal-card__group">
            <h3>Prácticas diferenciales</h3>
            <ul>
              {PRACTICES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="modal-card__note">
              Todo el proceso se documenta en expedientes digitales protegidos y se comparte un
              reporte ejecutivo con la familia autorizada cada semana.
            </p>
          </section>
          <section className="modal-card__group">
            <h3>Acompañamiento posterior</h3>
            <p>
              Durante los primeros 12 meses posteriores al egreso se programan sesiones virtuales y
              presenciales de seguimiento, reforzando los compromisos de prevención de recaídas, la
              red de padrinos y las metas personales de cada residente.
            </p>
          </section>
        </div>
        <div className="modal-card__actions">
          <a
            href={DOWNLOAD_PATH}
            className="btn btn--secondary"
            download
            target="_blank"
            rel="noreferrer"
          >
            Descargar PDF
          </a>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

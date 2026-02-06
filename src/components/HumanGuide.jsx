import '../styles/components/HumanGuide.scss';

export default function HumanGuide() {
  return (
    <section className="hero-vista__human-guide" aria-labelledby="human-guide-heading">
      <div className="container">
        <header className="human-guide__header">
          <h2 id="human-guide-heading">Guía clínica con sentido humano</h2>
        </header>

        <div className="human-guide__content">
          <p className="human-guide__intro">
            Sabemos que pedir ayuda no es fácil. Muchas familias llegan a este punto con miedo, dudas y
            cansancio emocional. En <strong>Conciencia CAI</strong>, priorizamos la empatía, la claridad y el trato
            digno desde el primer contacto.
          </p>

        </div>
      </div>
    </section>
  );
}

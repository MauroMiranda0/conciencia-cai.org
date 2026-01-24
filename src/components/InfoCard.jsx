import '../styles/components/InfoCard.scss';

export default function InfoCard({ title, text, className = '' }) {
  return (
    <article className={`info-card ${className}`.trim()}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

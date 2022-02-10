import '../styles/Card.css';
export default function Card({ children }: any) {
  return (
    <div className="card">
      <div className="card-container">{children}</div>
    </div>
  );
}

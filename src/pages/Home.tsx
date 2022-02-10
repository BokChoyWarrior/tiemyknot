import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

export function Home(props: any) {
  const navigate = useNavigate();

  return (
    <div id="homeContainer">
      <div className="buttonWithIcon">
        <span className="material-icons large-icon">add_circle_outline</span>
        <button className="blueButton" onClick={() => navigate('/123')}>
          Create new wedding list
        </button>
      </div>

      <div className="buttonWithIcon">
        <span className="material-icons large-icon">checklist_rtl</span>
        <button className="blueButton" onClick={() => navigate('/access')}>
          Access a wedding list
        </button>
      </div>
    </div>
  );
}

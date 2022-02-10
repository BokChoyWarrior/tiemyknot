import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => (
  <div id="NotFoundContainer">
    <h2>This page could not be found</h2>
    <Link to="/">Return to home page</Link>
  </div>
);

export default NotFound;

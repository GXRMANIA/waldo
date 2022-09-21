import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header">
      <Link className="left" style={{ textDecoration: 'none' }} to="/">
        <h1>Where's Waldo?</h1>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/scoreboard">
        <div>Scoreboard</div>
      </Link>
      
    </div>
  );
}

export default Header;

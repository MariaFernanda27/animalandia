import './nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div>
  	<nav>

  	<ul className="menu">

    <li className="item">
    <Link to="/home">Home</Link>
    </li>

    <li className="item">
    <Link to="/equipo">Equipo</Link>
    </li>
    <li className="item">
    <NavLink to="/servicios" activeClassname='active'>Servicios</NavLink>
    </li>
    <li className="item">
    <Link to="/perros">Perros</Link>
    </li>
     <li className="item">
    <Link to="/contactenos">Contactenos</Link>
    </li>

    <li className="item">
    <Link to="*"></Link>
    </li>


    
    </ul>
  
  	</nav>
    </div>
  );
} 

export default Nav;
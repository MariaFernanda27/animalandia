import logo from '../../assets/img/logo.jpg';
import power from '../../assets/img/power.svg';
import user from '../../assets/img/user.svg';
import ModalLogin from './ModalLogin';
import './header.css';

function Header() {
  return (
  	<header>
  	<div className="logo">
      <img src={logo} width="400px" />
  	</div>
  	<div className="btn">
  	<button type="button" className="btn-azul" data-bs-toggle="modal" data-bs-target="#login"> <img src={power} width="15px" />Ingresar</button>
    <button type="button" className="btn-morado"> <img src={user} width="15px" />Registrarse</button>
    
  	</div>
  <ModalLogin />
  	</header>
  );
} 

export default Header;
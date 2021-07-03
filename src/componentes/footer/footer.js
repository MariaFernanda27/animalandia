import sede from '../../assets/img/sede.svg';
import telefono from '../../assets/img/telefono.svg';
import email from '../../assets/img/email.svg';
import user from '../../assets/img/user.svg';
import './footer.css';



function Footer() {
  return (
 <section id="info">
	<div className="cajainfo">
	<article className="cajai">
        <img src={sede} width="35px" />
        <h5>Sedes</h5>
        <ul>
            <li>Sede Virrey</li> 
            <li>Sede Unicentro (24 Horas)</li> 
            <li>Sede Usaquen</li> 
            
        </ul>
  	</article>
    
  	<article className="cajai">
        <img src={telefono} width="35px" />
        <h5>Lineas de Atención</h5>
        <ul>
            <li>1234567</li> 
            <li>1234567</li> 
            <li>1234567</li>  
            
        </ul>
    </article>

    <article className="cajai">
    <img src={email} width="35px" />
    <h5>Escribenos</h5>
    <ul>
            <li>info@veterinaria.com</li> 
            <li>veterinaria1@veterinaria.com</li> 
            <li>veterinaria2@veterinaria.com</li>   
        </ul>
    
    
    </article>
    </div>
    </section>


  );
} 

export default Footer;

    
    
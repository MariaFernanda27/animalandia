import './seccion.css';
import golden from '../../assets/img/golden.jpg';
import calendario from '../../assets/img/calendario.svg';

function Seccionuno() {
  return (
 <section id="info">
	<div className="cajapr">
	<article className="caja1">
        
        <h1 className="titulo">AGENDA UNA CITA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h1>
        <p className="texto">Queremos que conozcas nuestra propuesta de baño para mascotas, 
        donde tenemos espacio dedicados para evitar la contaminación cruzada que puede llegar a existir en una veterinaria, 
        aplica de lunes a viernes para mascotas que visitan la clínica por primera vez.</p>
            <p className="texto">RECUERDA QUE NUESTRO EQUIPO MEDICO TE CONFIRMARA LA CITA.</p>
            <button className="btn-rgt"><img src={calendario} width="16px" />Registrarse</button>
  	</article>
    
  	<article className="caja2">
        <h2 className="titulo2">GRATIS PRIMER BAÑO</h2>
        <img src={golden}  />
    </article>

    </div>
    </section>


  );
} 

export default Seccionuno;
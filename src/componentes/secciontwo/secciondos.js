import paciente from '../../assets/img/paciente.png';
import vacunacion from '../../assets/img/vacunacion.png';
import veterinario from '../../assets/img/veterinario.png';
import './secciondos.css';



function Secciondos() {
  return (
 <section id="principal">

    <h1 className="tituloprc">Servicios</h1>

	<div className="cajasecciones">
    
	<article className="cajauno">
        <img src={paciente} width="120px" />
        <h5>Card title</h5>
        <p>This is a longer card with supporting text below as a natural 
        lead-in to additional content. This content is a little bit longer.</p>
  	</article>
    
  	<article className="cajados">
         <img src={veterinario} width="120px" />
        <h5>Servicio Medico</h5>
        <p>This is a longer card with supporting text below as a natural 
        lead-in to additional content. This content is a little bit longer.</p>
    </article>

    <article className="cajatres">
     <img src={vacunacion} width="120px" />
    <h5>Vacunacion</h5>
    <p>This is a longer card with supporting text below as a natural 
        lead-in to additional content. This content is a little bit longer.</p>
    </article>

    </div>
    </section>


  );
} 

export default Secciondos;
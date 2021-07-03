import Nav from'../../componentes/nav/nav';
import Header from'../../componentes/header/header';
import Footer from'../../componentes/footer/footer';
import Raza from'../../componentes/perroos/razas';
import {perros} from'../../componentes/perroos/Perros.json';
function Perros() {
  return (
  <div className="container-fluid">
  <Header />
  <Nav />
  <div className="row">
  

  {
    perros.map(perro=>(
       <div className="col-12 col-md-4" key={perro.id}>
       <Raza p1={perro.id} p2={perro.thumbnail} p3={perro.raza} p4={perro.descripcion} p5={perro.acercade} p6={perro.imagen}/>
       </div>
    ))
  }
  </div>
  <Footer />  
  </div>	
  );
} 

export default Perros;
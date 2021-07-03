import React from 'react';
import ReactDOM from 'react-dom';
import Nav from'./componentes/nav/nav';
import Header from'./componentes/header/header';
import Footer from'./componentes/footer/footer';

import Secciontwo from'./componentes/secciontwo/secciondos';

function Servicio(){
	return (
    <div>
    <Header />
    <Nav />
    <Secciontwo />
     <Footer /> 
    </div>
);
}

export default Servicio;
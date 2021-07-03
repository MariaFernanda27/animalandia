import React from 'react';
import ReactDOM from 'react-dom';
import './equipo.css';
import Nav from'./componentes/nav/nav';
import Header from'./componentes/header/header';
import Footer from'./componentes/footer/footer';

import Seccionuno from'./componentes/seccionone/seccion';

function Equipo(){
	return (
    <div>
    <Header />
    <Nav />
    <Seccionuno />
     <Footer />
    </div>
);
}

export default Equipo;

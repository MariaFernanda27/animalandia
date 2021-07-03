import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header';
import Nav from './componentes/nav/nav';
import Footer from'./componentes/footer/footer';
import Seccionuno from'./componentes/seccionone/seccion';
import React from 'react';
import Equipo from './equipo';
import Servicio from './servicios';
import Home from './home';
import Perros from './pages/perros/Perros';
import Button from'./componentes/boton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <div>

   
    <Router basename={process.env.PUBLIC_URL}>
    
    <Switch>
          <Route path="/equipo" component={Equipo}/>
          <Route path="/servicios" component={Servicio}/> 
          <Route path="/perros" component={Perros}/> 

          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          

        </Switch> 
         
    </Router>
<Button />
  </div>
  

    
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from'./componentes/nav/nav';
import Header from'./componentes/header/header';
import Footer from'./componentes/footer/footer';


function Home(){
	return (
    <div>
    <Header />
    <Nav />
      <Footer />
    </div>
);
}

export default Home;
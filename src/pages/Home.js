import React from 'react';
import yo from "../imgs/yo.jpg"
import Portafolio from "../components/Portafolio"
import Contact from "../components/Contact"

const Home = props => (
  <div>
    <div className="Profile">
      <div className="ImageContainer">
        <img className="ImageProfile" src={yo} alt="Armando Narcizo Rueda Pérez"/>
      </div>
      <div className="title One">Armando Narcizo Rueda Pérez</div>
      <div className="title Two">Programador Jr.</div>
      <div className="title Three">Diseño Web y SEO</div>
    </div>
    <div className="AboutMe">
      <div className="AboutMe title">SOBRE MI</div>
      <div className="AboutMe desc">Mi nombre es Armando, soy diseñador de paginas web, nacido en Chetumal. Me apasiona la programación porque deseo tener algún día una app que le sea útil a muchas personas, internet es una herramienta maravillosa en ese sentido por que me pone en contacto con personas y organizaciones que les gusta enseñar tecnologías a quien le interese superarse.</div>
    </div>
    <Portafolio data={props.data}/>
    <Contact />
  </div>
)

export default Home;

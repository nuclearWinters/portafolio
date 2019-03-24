import React from 'react';
import Contact from "../components/Contact"
import { Helmet } from 'react-helmet'


const Contacto = props => (
  <div style={{height: '100%'}}>
    <Helmet>
      <title>El Cenzontle Ecocamping - Información de contacto</title>
      <meta name={"description"} content="El Cenzontle Ecocamping: Información de contacto; Telefono: 983 213 8521, E-mail: elcenzontleecocamping@gmail.com"/>
    </Helmet>
    <div style={{marginTop: "30px"}}></div>
    <Contact/>
  </div>
);

export default Contacto;
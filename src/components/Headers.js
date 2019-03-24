import React from "react"
import { NavLink } from "react-router-dom"

const Headers = props => (
    <div className="NavBar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre-mi">Sobre mi</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
    </div>
)

export default Headers;
import React from "react";
import { NavLink } from "react-router-dom"

const Portafolio = props => {
    const proyectos = props.data.map(
        (proyecto, index) => {
            return(
                <div className="Portafolio-relative" key={index}>
                    <img className="Portafolio-image" height="150px" width="150px" src={proyecto.img} alt={proyecto.nombre}/>
                    <div className="Portafolio-hover">
                        <div className="hover-title">
                            Empresa:
                        </div>
                        <div className="hover-oneDesc">
                            {proyecto.nombre}
                        </div>
                        <div className="hover-title">
                          Tecnologías:
                        </div>
                        <div className="hover-longDesc">
                            {proyecto.tec}
                        </div>
                        <a href={proyecto.source}  target="_blank" rel="noopener noreferrer">
                          <div className="hover-title-a">
                            Ver código
                          </div>
                        </a>
                        <a href={proyecto.link}  target="_blank" rel="noopener noreferrer">
                          <div className="hover-title-a">
                            Ver página
                          </div>
                        </a>
                    </div>
                </div>
            )
        }
    )
    return(
        <div className="Portafolio">
            <div className="Portafolio-title">PORTAFOLIO</div>
            <div className="Portafolio-desc">Mis ultimos trabajos</div>
            <div className="Portafolio-container">
                {proyectos}
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px"}}><NavLink to="/proyectos" className="Mas">...</NavLink></div>
        </div>
    )
}

export default Portafolio;
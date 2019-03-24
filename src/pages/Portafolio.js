import React from "react"

const Portafolio = props => {
    const proyectos = props.data.map(
        (proyecto, index) => {
            return(
                <div className="flexPortafolio" key={index}>
                    <div style={{margin: "auto", display: "flex", flexDirection: "row"}}>
                        <img className="Portafolio-image" src={proyecto.img} alt={proyecto.nombre}/>
                        <div style={{width: "300px", display: "flex", alignItems: "baseline", justifyContent: "baseline", flexDirection: "column"}}>
                            <div style={{paddingBottom: "10px", paddingLeft: "10px"}}><strong>Empresa:</strong> {proyecto.nombre}</div>
                            <div style={{paddingBottom: "10px", paddingLeft: "10px"}}><strong>Tecnologias:</strong> {proyecto.tec}</div>
                            <a target="_blank" rel="noopener noreferrer" href={proyecto.link} style={{paddingBottom: "10px", paddingLeft: "10px"}}>{proyecto.link}</a>
                            <a target="_blank" rel="noopener noreferrer" href={proyecto.source} style={{paddingBottom: "10px", paddingLeft: "10px"}}>Codigo fuente</a>
                            <div style={{paddingBottom: "10px", paddingLeft: "10px"}}>{proyecto.desc}.</div>
                        </div>
                    </div>
                </div>
            )
        }
    )
    return(
        <div className="back" style={{marginTop: "2em", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <div className="titleSM first" style={{flex: 1}}>Proyectos</div>
            {proyectos}
        </div>
    )
}

export default Portafolio;
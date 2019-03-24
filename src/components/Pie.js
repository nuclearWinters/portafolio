import React from "react"
import yo from "../imgs/yo.jpg"

const Pie = props => (
    <div style={{padding: "30px 0px", backgroundColor: "rgb(59, 75, 82)"}}>
        <div style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: "1.2em"}}>Armando Narcizo Rueda Pérez</div>
        <div style={{textAlign: "center", color: "white", fontSize: "1em", padding: "5px 0px 0px 0px"}}>Programador Jr.</div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "30px 0px 0px 0px"}}>
            <img height="25px" width="25px" style={{padding: "5px 10px", borderRadius: "50%"}} src={yo} alt="Github"/>
        </div>
    </div>
)

export default Pie;
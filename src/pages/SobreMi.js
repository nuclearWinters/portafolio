import React, { Component} from "react"
import "./pages.css"
class SobreMi extends Component {
    state = {
        data: {
            enemy: {
                AP: 0
            }
        }
    };
    wsConnection = (firebase_user) => {
        var ws = new WebSocket("ws://localhost:8080")
        ws.onopen = event => {
          ws.send(JSON.stringify({
            "type": 'auth',
            "payload": String(firebase_user)
          }))
        }
        ws.onmessage = event => {
          const data = JSON.parse(event.data)
          console.log(data)
          this.setState({
              data: data
          })
          //this.onWebSocketSnap(data)
        }
        ws.onclose = event => {
          setTimeout(() => {
            this.wsReconnection(1)
          }, 3000)
        }
        ws.onerror = (e) => {
          console.log(e)
        }
      }
    
      wsReconnection = (firebase_user) => {
        this.wsConnection(firebase_user)
        console.log("Reconexion ahora")
      }
    
      componentWillMount() {
        this.wsConnection(1)
      }
    name = (index) => {
        if (index === 0) {
            return "Javascript Frameworks"
        }
        else if (index === 1) {
            return "MVC Frameworks"
        }
        else if (index === 2) {
            return "Estilos"
        }
        else if (index === 3) {
            return "Lenguajes Server Side"
        }
        else if (index === 4) {
            return "Base de datos"
        }
        else if (index === 5) {
            return "Desarrollo de Aplicaciones Mobiles"
        }
        else if (index === 6) {
            return "De Google"
        }
    }
    render() {
        const list = this.props.data.map(
            (list, index) => {
                const name = this.name(index)
                const every = list.map(
                    (list, index) => {
                        return(
                            <img key={index} className="imgli" alt={list.nombre} title={list.nombre} src={list.url}/>
                        )
                    }
                )
                return(
                    <div key={index}>
                        <div className="title2">{name}</div>
                        <div className="descli">{every}</div>
                    </div>
                    
                )
            }
        )
        return (
            <div className="back">
            <div className="titleSM first">Lic. Armando Narcizo Rueda Pérez</div>
            <div>{this.state.data.enemy.AP}</div>
            <div className="textSM">¡Hola! mi nombre es Armando, soy diseñador de paginas web en Chetumal, Quintana Roo.</div>
            <div className="textSM">Soy licenciado en Sistemas Comerciales, egresado de la Universidad de Quintana Roo (UQROO).</div>
            <div className="textSM">Me apasiona la programación porque deseo tener algún día una app que le sea útil a muchas personas, internet es una herramienta maravillosa en ese sentido por que me pone en contacto con personas y organizaciones con tecnologías interesantes.</div>
            <a href="/sobre-mi" target="_blank" rel="noopener noreferrer" className="title3">Curriculum vitae completo on-line</a>
            <div className="titleli">Conocimientos:</div>
            <div className="text2">
                {list}
            </div>
        </div>
        )
    }
}

export default SobreMi;
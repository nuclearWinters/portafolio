import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import Error from "./pages/Error"
import Headers from "./components/Headers"
import './App.css';
import Pie from "./components/Pie"
import SobreMi from "./pages/SobreMi"
import Portafolio from "./pages/Portafolio"
import { db } from "./components/Firebase"

/*Este comentario creara conflictos?*/

class App extends Component {
  state = {
    data: [],
    dataLast3: [],
    habilidades: [[]]
  };
/*change no saved*/
  componentWillMount() {
    const data = db.ref("proyectos")
    data.once("value", snap => {
      let array = []
      const data = snap.val()
      for (const key in data["proyectos"]) {
        array.push(data["proyectos"][key])
      }
      this.setState({
        data: array,
        dataLast3: array.slice(Math.max(array.length - 3, 0)),
        habilidades: data["habilidades"]
      })
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Headers/>
        <Switch>
          <Route path="/"
          render={(props) => <Home {...props} data={this.state.dataLast3} />} exact/>
          <Route path="/contacto" component={Contacto}/>
          <Route path="/sobre-mi" 
          render={(props) => <SobreMi {...props} data={this.state.habilidades} />}/>
          <Route path="/proyectos"
          render={(props) => <Portafolio {...props} data={this.state.data} />}/>
          <Route component={Error}/>
        </Switch>
        <Pie/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;



/*cambio hecho*/
/*cambio*/
/*cambio2*/
/*cambio3*/
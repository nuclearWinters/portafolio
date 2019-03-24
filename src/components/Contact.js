import React, { Component } from "react";
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    state = {
        name: "",
        email: "",
        text: "",
        phone: "",
        infoText: false,
        infoTextBody: "",
        backgroundColor: ""
    } 

    fetchEmailJS = () => {
        const Params = {
            text: this.state.text,
            user_name: this.state.name,
            user_email: this.state.email,
            phone: this.state.phone
        }
        if (Params.text === "" || Params.user_name === "" || Params.user_email === "" || Params.phone === "") {
            this.setState({
                infoText: true,
                infoTextBody: "El mensaje no se pudo enviar porque faltan datos.",
                backgroundColor: "firebrick"
            })
        }
        else {
            emailjs.send('gmail','mytemplate', Params, 'user_Z4BDYXH0dYmedcWs1xOP3')
            .then((response) => {
                this.setState({
                    infoText: true,
                    infoTextBody: "¡Mensaje enviado exitosamente!",
                    backgroundColor: "forestgreen"
                })
            }, (err) => {
                this.setState({
                    infoText: true,
                    infoTextBody: "Error al enviar el mensaje, intente de nuevo.",
                    backgroundColor: "firebrick"
                })
            });
            this.setState({
                name: "",
                email: "",
                text: "",
                phone: "",
            })
        }
        
    }
    
    handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({[name]: value})
    }
    
    render() {
        return (
            <div style={{backgroundColor: "rgb(70, 90, 100)", paddingTop: "30px"}}>
                <div style={{textAlign: "center", color: "dodgerblue", fontWeight: "bold", fontSize: "1.5em"}}>CONTACTO</div>
                <div style={{textAlign: "center", fontSize: "1.2em", color: "white"}}>¡Escribeme y trabajemos juntos!</div>
                <form style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
                    <div className="container-contact">
                        <div style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", display: "flex"}}>
                            <div style={{color: "white", fontWeight: "bold", padding: "10px 0px"}}>Nombre:</div>
                            <input style={{width: "80%"}} onChange={this.handleInputChange.bind(this)} type="text" name="name"/>
                        </div>
                        <div style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", display: "flex"}}>
                            <div style={{color: "white", fontWeight: "bold", padding: "10px 0px"}}>E-mail:</div>
                            <input style={{width: "80%"}} onChange={this.handleInputChange.bind(this)} type="email" name="email"/>
                        </div>
                        <div style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", display: "flex"}}>
                            <div style={{color: "white", fontWeight: "bold", padding: "10px 0px"}}>Número telefonico:</div>
                            <input style={{width: "80%"}} onChange={this.handleInputChange.bind(this)} type="phone" name="phone"/>
                        </div>
                    </div>
                    <div className="textContact">
                        <div style={{color: "white", fontWeight: "bold", padding: "10px 0px"}}>Mensaje:</div>
                        <textarea style={{width: "93%"}} onChange={this.handleInputChange.bind(this)} name="text"></textarea>
                    </div>
                    {this.state.infoText ? <div style={{margin: "30px 0px 0px 0px", backgroundColor: this.state.backgroundColor, padding: "3px 10px", height: "1.5em", borderRadius: "10px", color: "white"}}>{this.state.infoTextBody}</div> : null}
                    <button style={{margin: "30px 0px 30px 0px", backgroundColor: "#4CAF50", border: "none", color: "white", padding: "15px 32px", textAlign: "center", textDecoration: "none", display: "inline-block", fontSize: "1.2em", cursor: "pointer", borderRadius: "12px"}} onClick = {this.fetchEmailJS} type = "button" name = "submit">Enviar</button>
                </form>
                <div style={{textAlign: "center", fontSize: "1.2em", color: "white"}}>E-mail: armandonarcizoruedaperez@gmail.com</div>
                <div style={{textAlign: "center", fontSize: "1.2em", color: "white", paddingTop: "20px", paddingBottom: "30px"}}>Mobil: 558 743 1589</div>
            </div>
        );
    }
}

export default Contact;
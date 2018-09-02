import React from "react"
import ReactDOM from "react-dom"
import { Hora } from "./Hora"


class HelloMessage extends React.Component {
    render() {
        return (
            <div style={{
                border: "1px solid red",
                display: "flex",
                //colocar el contenido 
                justifyContent: "space-around",
                //si no caben en la pant se saltan de linea y se ponen en columna
                flexWrap: "wrap"
            }}>
                <p>Hello {this.props.name} {this.props.lastname}</p>
                <Hora></Hora>
                <Hora></Hora>
            </div>
        );
    }
}


ReactDOM.render(
    <HelloMessage name="Olga" lastname="Shestakova" />,
    document.querySelector("#app")
);



import React from "react"


export class Hora extends React.Component {
    constructor() {
        super()
        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds(),
            color: "red"
        }
        setInterval(() => {
            this.setState({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
                color: (this.state.second % 2) ? "red" : "blue"
            })
        }, 1000)
    }
    render() {
        return (
            <p style={{
                color: this.state.color
            }}>Hoy es sabado, y son las {this.state.hour}:{this.state.minute}:{this.state.second} </p>
        )
    }
}
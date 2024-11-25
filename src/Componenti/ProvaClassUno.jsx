import {Component} from "react";

class ProvaClassUno extends Component{
    render(){
            return(
                <div>
                    <h1>Sotto abbiamo un bottone</h1>
                    <button className="btn">{this.props.label}</button>
                </div>
            )
        } 
    }
export default ProvaClassUno
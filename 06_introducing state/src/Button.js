import React, { Component } from "react";


class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }

        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState({clicked: true});
    }
    render(){
        return (
            <div className="Button">
                <h1>{this.state.clicked ? "Clicked" : "Notclicked"}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    };
}

export default Button;
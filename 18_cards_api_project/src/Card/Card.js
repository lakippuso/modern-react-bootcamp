import React, {Component} from 'react';
import './Card.css';
class Card extends Component {
    constructor(props){
        super(props);
        
        let angle = Math.floor(Math.random() * 100);
        let x = Math.floor(Math.random() * 40);
        let y = Math.floor(Math.random() * 40);
        this._style = {transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`};
    }
    render(){
        return (
            <img src={this.props.image} alt={this.props.code} style={this._style} />
          );
    }
}

export default Card;

import React, {Component} from 'react';
import './Dice.css'

const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
const fontAwesomeIcon = "fa-solid fa-dice-";

class Dice extends Component {

    render(){
        var icon = "Dice "+fontAwesomeIcon + numbers[this.props.count];
        icon += (this.props.rolling) ? " Rolling" : "";
        return (
            <i className={icon}></i>
        );
    }
}

export default Dice;

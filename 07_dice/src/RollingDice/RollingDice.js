import React, {Component} from 'react';
import Dice from '../Dice/Dice';
import './RollingDice.css';

class RollingDice extends Component {
    state = {
        dice1: 0,
        dice2: 0,
        isDiceRolling: false
    }

    rollDice = () => {
        this.setState({isDiceRolling: true});
        this.setState({dice1: this.getRandomNumber()});
        this.setState({dice2: this.getRandomNumber()});
        setTimeout(() =>{
            this.setState({isDiceRolling: false});
        }, 1000);
    }
    getRandomNumber = () =>{
        let rand = Math.floor(Math.random() * 6);
        return rand;
    }

    render(){
        return (
            <div className="RollingDice">
                <div className="Dices">
                    <Dice count={this.state.dice1} rolling={this.state.isDiceRolling}/>
                    <Dice count={this.state.dice2} rolling={this.state.isDiceRolling}/>
                </div>
                <button onClick={this.rollDice} disabled={this.state.isDiceRolling}>{!this.state.isDiceRolling ? "Roll Dice": "Rolling..."}</button>
            </div>
          );
    }
}

export default RollingDice;

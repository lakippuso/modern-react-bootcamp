import React, {Component} from 'react';
import Coin from '../Coin/Coin';
class Flipper extends Component {
    state = {
        heads: 0,
        tails: 0,
        coin: false,
    }
    roll = e =>{
        let rand = Math.floor(Math.random() * 2);
        if(rand){
            this.setState(curState =>({
                tails: curState.tails + 1,
                coin: false
            }));
        }
        else{
            this.setState(curState =>({
                heads: curState.heads + 1,
                coin: true
            }));
        }
    }
    render(){
        return (
            <div className="Flipper">
                <Coin face={this.state.coin}/>
                
                <p>{`Out of ${this.state.heads + this.state.tails}, There have been ${this.state.heads} heads and ${this.state.tails} tails`}</p>

                <button onClick={this.roll}>Generate!</button>
            </div>
          );
    }
}

export default Flipper;

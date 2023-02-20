import React, {Component} from 'react';
class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: 'whiskey',
            score: 0,
        }
    }
    render(){
        return (
            <div className="Game">
                <h1>Game</h1>
                <p>Current Score: {this.state.score}</p>
            </div>
          );
    }
}

export default Game;

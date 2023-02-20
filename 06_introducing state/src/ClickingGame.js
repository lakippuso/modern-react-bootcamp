import React, {Component} from 'react';
class ClickingGame extends Component {
    state = {
        num : 1,
        winner: false,
    }
    handleClick = e =>{
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
        if(rand === 7){       
            this.setState({winner: true})
        }
    }
    render(){
        return (
            <div className="ClickingGame">
                <h1>Number is {this.state.num}</h1>
                { !this.state.winner 
                    ? <button onClick={this.handleClick}>Find number!</button> 
                    : <h3>You Win!</h3>
                }
            </div>
          );
    }
}

export default ClickingGame;

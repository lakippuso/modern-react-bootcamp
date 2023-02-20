import React, {Component} from 'react';
import LotteryBalls from '../LotteryBalls/LotteryBalls';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: "Lottery",
        maxNum: 40,
        numBalls: 6,
    }
    state = {
        nums: Array.from({ length: this.props.numBalls })
    }

    createNumbers = () =>{

        // Bad way to update state
        // var newNums = [];
        // for(let i=0; i < this.props.numBalls; i++){
        //     newNums.push(this.getRandomNumber());
        // }
        // this.setState({nums: newNums});

        //Best practice
        this.setState(curState =>({
            nums: curState.nums.map(
                n => this.getRandomNumber()
            )
        }));
    }

    getRandomNumber = () =>{
        let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
        return rand;
    }
    render(){
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Balls">
                    {this.state.nums.map((n) => 
                        <LotteryBalls num={n}/>
                    )}
                </div>
                <button onClick={this.createNumbers}>Generate</button>
            </div>
        );
    }
}

export default Lottery;

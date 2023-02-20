import React, {Component} from 'react';
import './LotteryBalls.css';

class LotteryBalls extends Component {
    
    render(){
        return (
            <div className="LotteryBalls">
                {this.props.num}
            </div>
          );
    }
}

export default LotteryBalls;

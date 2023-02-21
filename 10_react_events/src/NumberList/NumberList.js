import React, {Component} from 'react';
import NumberItem from '../NumberItem/NumberItem';
class NumberList extends Component {
    state = {
        nums: [1,2,3,4,5]
    }
    removeNumber = (num) =>{
        this.setState(curState => ({
            nums: curState.nums.filter(n => n !== num)
        }));
    }
    render(){
        let nums = this.state.nums.map( n => (
            <NumberItem num={n} remove={this.removeNumber}/>
        ) )
        return (
            <div className="NumberList">
                <ul>
                    {nums}
                </ul>
            </div>
          );
    }
}

export default NumberList;

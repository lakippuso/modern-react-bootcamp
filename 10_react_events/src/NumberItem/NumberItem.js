import React, {Component} from 'react';
class NumberItem extends Component {
    remove = e =>{
        this.props.remove(this.props.num);
    }
    render(){
        return (
            <li>
                {this.props.num}
                <button onClick={this.remove}>X</button>
            </li>
          );
    }
}

export default NumberItem;

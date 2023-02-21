import React, {Component} from 'react';
import './Box.css';
import Colors from '../services/colors';

let colors = new Colors();

class Box extends Component {
    state ={
        backgroundColor: this.props.color,
    }
    changeColor = () =>{
        var newColor = colors.pickColor();
        while(this.state.backgroundColor === newColor){
            newColor = colors.pickColor()
        }
        this.setState({backgroundColor: newColor});
    }
    render(){
        var style = {
            backgroundColor: this.state.backgroundColor,
        }
        return (
            <div 
                className="Box" style={style} 
                onClick={this.changeColor}>
                {style.backgroundColor}
            </div>
          );
    }
}

export default Box;

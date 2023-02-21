import React, {Component} from 'react';
import Box from '../Box/Box';
import './ColorBox.css';
import Colors from '../services/colors';

let c = new Colors();
class ColorBox extends Component {
    static defaultProps = {
        numBox: 16,
    }
    render(){
        let box = Array.from({ length: this.props.numBox }).map( b => <Box color={c.pickColor()}/> );
        return (
            <div className="ColorBox">
                {box}
            </div>
          );
    }
}

export default ColorBox;

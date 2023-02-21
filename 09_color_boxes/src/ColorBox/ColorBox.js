import React, {Component} from 'react';
import Box from '../Box/Box';
import './ColorBox.css';
import Colors from '../services/colors';

let c = new Colors();
class ColorBox extends Component {
    render(){
        return (
            <div className="ColorBox">
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
                <Box color={c.pickColor()}/>
            </div>
          );
    }
}

export default ColorBox;

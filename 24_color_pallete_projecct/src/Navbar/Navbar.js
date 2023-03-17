import React, {Component} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './Navbar.css';
class Navbar extends Component {
    render(){
        const { level, changeChroma, changeFormat, colorFormat } = this.props;
        return (
            <div className="Navbar">
                <div className="Navbar-brand"><span>React Color Picker</span></div>
                
                <div className="Navbar-slider">
                    <span>Level: {level} </span>
                    <input type="range" min="1" max="9" onChange={changeChroma}/>
                </div>
                <div className="Navbar-format">
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={colorFormat}
                    onChange={changeFormat}
                    >
                        <MenuItem value="hex">HEX - #1234EF</MenuItem>
                        <MenuItem value="rgb">RGB - rbg(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rbga(255,255,255,1)</MenuItem>
                    </Select>
                </div>
            </div>
          );
    }
}

export default Navbar;

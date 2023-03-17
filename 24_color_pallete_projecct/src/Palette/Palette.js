import React, {Component} from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import './Palette.css';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

class Palette extends Component {
    state = {
        level: '600',
        colorFormat: 'hex'
    }
    changeChroma = value =>{
        this.setState({level: levels[value]})
    }
    changeFormat = (value) =>{
        console.log(value);
        this.setState({ colorFormat: value });
    }
    render(){
        let boxes = this.props.palette
        .colors[this.state.level].map( 
            c => (<ColorBox name={c.name} color={c[this.state.colorFormat]} />)
        );
        return (
            <div className="Palette">
                <Navbar level={this.state.level} 
                        changeChroma={this.changeChroma} 
                        changeFormat={this.changeFormat} 
                        colorFormat={this.state.colorFormat}
                />
                <div className="Palette-colors">    
                    {boxes}
                </div>
            </div>
          );
    }
}

export default Palette;

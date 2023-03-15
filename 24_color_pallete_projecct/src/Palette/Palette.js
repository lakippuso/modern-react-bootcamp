import React, {Component} from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.css';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

class Palette extends Component {
    state = {
        level: '600'
    }
    changeChroma = evt =>{
        this.setState({level: levels[evt.target.value]})
    }
    render(){
        let boxes = this.props.palette
        .colors[this.state.level].map( 
            c => (<ColorBox rgb={c.rgb} 
                            name={c.name} 
                            hex={c.hex}/>)
        );
        return (
            <div className="Palette">
                <div className="Palette-slider">
                    <input type="range" min="2" max="9" onChange={this.changeChroma}/>
                </div>
                <div className="Palette-colors">    
                    {boxes}
                </div>
            </div>
          );
    }
}

export default Palette;

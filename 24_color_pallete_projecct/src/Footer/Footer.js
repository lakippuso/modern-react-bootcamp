import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        const { paletteName, paletteIcon} = this.props;
        return (
            <div className="Footer">
                <span className='name'>{paletteName} </span>
                <span className='emoji'>{paletteIcon}</span>
            </div>
          );
    }
}

export default Footer;

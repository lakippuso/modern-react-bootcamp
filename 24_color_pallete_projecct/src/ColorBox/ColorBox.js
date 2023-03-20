import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
class ColorBox extends Component {
    state = {
        isCopying: false,
    }
    changeOnCopy = () =>{
        this.setState({isCopying: true}, () =>{ 
            setTimeout(() => {
            this.setState({isCopying: false});
        }, 1500)});
    }
    render(){
        const { name, color } = this.props;
        let show = this.state.isCopying ? "show" : '';
        return (
            <CopyToClipboard text={color} onCopy={this.changeOnCopy}>
                <div className="ColorBox" style={{backgroundColor: color}}>
                    <div className={`ColorBox-copy-overlay ${show}`} style={{backgroundColor: color}}></div>
                    <div className="ColorBox-copy">                
                        <div className="ColorBox-copy-content">{name}</div>
                        <button>COPY</button>
                    </div>
                    <div className={`ColorBox-copy-message ${show}`}>
                        <h1>COPIED!</h1>
                        <p>{color}</p>
                    </div>
                    <Link to={`/palette`} onClick={e => e.stopPropagation()}>More</Link>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;

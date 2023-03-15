import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
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
        const { name, rgb, hex } = this.props;
        let show = this.state.isCopying ? "show" : '';
        return (
            <CopyToClipboard text={hex} onCopy={this.changeOnCopy}>
                <div className="ColorBox" style={{backgroundColor: rgb}}>
                    <div className={`ColorBox-copy-overlay ${show}`} style={{backgroundColor: rgb}}></div>
                    <div className="ColorBox-copy">                
                        <div className="ColorBox-copy-content">{name}</div>
                        <button>COPY</button>
                    </div>
                    <div className={`ColorBox-copy-message ${show}`}>
                        <h1>COPIED!</h1>
                        <p>{hex}</p>
                    </div>
                    <span>More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;

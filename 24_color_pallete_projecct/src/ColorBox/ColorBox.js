import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link, useParams } from 'react-router-dom';
import './ColorBox.css';

export default function ColorBox(props){

    const changeOnCopy = () =>{
        setIsCopying( true );

        setTimeout(() => {
            setIsCopying( false );
        }, 1500);
    };
    const { name, color, id, showLink } = props;

    let [ isCopying, setIsCopying ] = useState();
    let show = isCopying ? "show" : '';

    let params = useParams();

    return (
        <CopyToClipboard text={color} onCopy={changeOnCopy}>
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
                {showLink && <Link to={`/palette/${params.paletteId}/${id}`} onClick={e => e.stopPropagation()}>More</Link>}
            </div>
        </CopyToClipboard>
    );
}
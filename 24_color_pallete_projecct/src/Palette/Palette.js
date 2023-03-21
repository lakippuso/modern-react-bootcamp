import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import seedColors from '../seedColors';
import generatePalette from '../colorHelper';
import { useParams } from 'react-router-dom';
import './Palette.css';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function Palette(props){
    //States
    const [ level, setLevel ] = useState('500');
    const [ colorFormat, setColorFormat ] = useState('hex');

    const changeChroma = value =>{
        setLevel(levels[value])
    }
    const changeFormat = (value) =>{
        setColorFormat(value);
    }
    const param = useParams();
    let palette = generatePalette(getPalette(param.paletteId));
    let boxes = palette
    .colors[level].map( 
        c => (<ColorBox name={c.name} color={c[colorFormat]} id={c.id} isMultiPalette={true}/>)
    );
    return (
        <div className="Palette">
            <Navbar level={level} 
                    changeChroma={changeChroma} 
                    changeFormat={changeFormat} 
                    colorFormat={colorFormat}
            />
            <div className="Palette-colors">    
                {boxes}
            </div>
            <Footer paletteName={palette.paletteName} paletteIcon={palette.emoji}/>
        </div>
    );
}
function getPalette(id) {
    return seedColors.find( function(palette) {
        if(palette.id === id) return palette;
    });
}
export default Palette;

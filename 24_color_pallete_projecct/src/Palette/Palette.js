import React, { useState } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import generatePalette from '../colorHelper';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

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
    let palette = generatePalette(props.getPalette(param.paletteId));
    
    let boxes = palette
    .colors[level].map( 
        c => (<ColorBox name={c.name} color={c[colorFormat]} id={c.id} isMultiPalette={true}/>)
    );

    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        
        '& .Palette-colors': {
            height: '90%',
            display: 'flex', 
            flexWrap: 'wrap',
        }
    }

    return (
        <Box className="Palette" sx={style}>
            <Navbar level={level} 
                    changeChroma={changeChroma} 
                    changeFormat={changeFormat} 
                    colorFormat={colorFormat}
            />
            <div className="Palette-colors">    
                {boxes}
            </div>
            <Footer paletteName={palette.paletteName} paletteIcon={palette.emoji}/>
        </Box>
    );
}
export default Palette;

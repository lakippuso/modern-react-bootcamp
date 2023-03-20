import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import seedColors from "../seedColors";
import generatePalette, { generateScale, levels } from '../colorHelper';
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { useState } from "react";

export default function SingleColorPalette(props) {
    //States
    const [ colorFormat, setColorFormat ] = useState('hex');

    const showSlider = false;

    const changeFormat = (value) =>{
        setColorFormat(value);
    }
    const style = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        "& .Navbar": {
            marginBottom: '10px',
            "& .Navbar-control": {
                justifyContent: 'end',
            }
        },
        "& .SingleColorPalette-colors": {
            height: '90%',
        }
    }
    let { paletteId, colorId } = useParams();
    let palette = getPalette( paletteId );
    let newPalette = generateNewPalette(palette, colorId);

    // Find color name from paramId
    // let color = palette.colors.find( color => {
    //     return color.name.toLowerCase() === colorId;
    // });
    // Generate scale of color
    // let scale = generateScale(color.color, 10).reverse();

    let boxes = newPalette.map( (c, i) => 
        <ColorBox 
            key={i} 
            name={c.name} 
            color={c[colorFormat]}
            showLink={false}
        />
    )
    return (
        <Box sx={style} className="SingleColorPalette">
            <Navbar 
                showSlider={showSlider} 
                changeFormat={changeFormat} 
                colorFormat={colorFormat}
            />
            <div className="SingleColorPalette-colors">
                {boxes.slice(1)}
            </div>
            
            <Footer paletteName={palette.paletteName} paletteIcon={palette.emoji}/>
        </Box>
    );
}
//Search Color palette
function getPalette( paletteId ) {
    return seedColors.find( function(palette) {
        if (palette.id === paletteId) return palette;
    });
}
//Generate new Palette
function generateNewPalette( palette, colorId ){
    let shades = [];
    let allColors = generatePalette(palette).colors;
    for ( let key in allColors){
        shades = shades.concat(
            allColors[key].filter( color => color.id === colorId)
        );
    }
    return shades;
}
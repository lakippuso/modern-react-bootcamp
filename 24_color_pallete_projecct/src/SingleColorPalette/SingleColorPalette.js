import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import seedColors from "../seedColors";
import generatePalette from '../colorHelper';
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { useState } from "react";

export default function SingleColorPalette(props) {
    //States
    const [ colorFormat, setColorFormat ] = useState('hex');
    const navigate = useNavigate();

    const showSlider = false;

    const changeFormat = (value) =>{
        setColorFormat(value);
    }
    const handleGoBack = (evt) =>{
        return navigate(-1);
    }
    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        
        "& .Navbar": {
            marginBottom: '10px',
            "& .Navbar-control": {
                justifyContent: 'end',
            }
        },
        '& .Palette-colors': {
            height: '90%',
            display: 'flex', 
            flexWrap: 'wrap',
            "& .GoBack": {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
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
            isMultiPalette={false}
        />
    );
    boxes.concat(<div>Hello</div>);
    console.log();
    return (
        <Box sx={style} className="SingleColorPalette Palette">
            <Navbar 
                showSlider={showSlider} 
                changeFormat={changeFormat} 
                colorFormat={colorFormat}
            />
            <div className="Palette-colors">
                {boxes.slice(1)}
                <div 
                    className="ColorBox GoBack" 
                    onClick={handleGoBack}
                >
                    <button>Go Back</button>
                </div>
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
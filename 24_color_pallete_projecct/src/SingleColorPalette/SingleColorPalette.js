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
                width: '20%',
                height: '50%',
                margin: '0 auto',
                display: 'inline-block',
                position: 'relative',
                cursor: 'pointer',
                textTransform: 'uppercase',
                backgroundColor: 'black',
                "& button": {
                    display: 'inline-block',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: '30px',
                    width: '100px',
                    marginLeft: '-50px',
                    marginTop: '-15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: '30px',
                }
            }
        },
    }
    let { paletteId, colorId } = useParams();
    let palette = props.getPalette( paletteId );
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
                    className="GoBack" 
                    onClick={handleGoBack}
                >
                    <button>Go Back</button>
                </div>
            </div>
            
            <Footer paletteName={palette.paletteName} paletteIcon={palette.emoji}/>
        </Box>
    );
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
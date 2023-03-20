import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import seedColors from "../seedColors";
import generatePalette, { generateScale, levels } from '../colorHelper';
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

export default function SingleColorPalette(props) {
    //States
    const [ level, setLevel ] = useState('600');
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

    // Find color name from paramId
    let color = palette.colors.find( color => {
        return color.name.toLowerCase() === colorId;
    });
    // console.log(color)
    // Generate scale of color
    let scale = generateScale(color.color, 10).reverse();

    let boxes = scale.map( (c, i) => <ColorBox name={`${color.name} ${levels[i]}`} color={c} showLink={false}/>)
    return (
        <Box sx={style} className="SingleColorPalette">
            <Navbar showSlider={showSlider} />
            <div className="SingleColorPalette-colors">
                {boxes.slice(1)}
            </div>
        </Box>
    );
}
//Search Color palette
function getPalette( paletteId ) {
    return seedColors.find( function(palette) {
        if (palette.id === paletteId) return palette;
    });
}
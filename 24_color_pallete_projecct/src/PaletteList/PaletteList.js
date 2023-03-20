import { Box } from '@mui/material';
import React, {Component} from 'react';
import MiniPalette from '../MiniPalette/MiniPalette';
import seedColors from '../seedColors';
import './PaletteList.css';

class PaletteList extends Component {
    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
            width: '50vw',
            margin: 'auto',
            "& header": {
            },
            "& .Palette-links": {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }
        }
        let minipalettes = seedColors.map( palette => <MiniPalette {...palette} /> )
        return (
            <Box className="PaletteList" sx={style}>
                <header><h1>PaletteList</h1></header>
                <div className="Palette-links">
                    {minipalettes}
                </div>
            </Box>
          );
    }
}

export default PaletteList;

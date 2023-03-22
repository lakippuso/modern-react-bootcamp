import { Box } from '@mui/material';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';
import seedColors from '../seedColors';

class PaletteList extends Component {
    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
            width: '50vw',
            margin: 'auto',
            "& header": {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                margin: '0 2%',
                "& a": {
                    fontSize: '.9rem',
                    color: 'white',
                    // textDecoration: 'none',
                }
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
                <header><h1>PaletteList</h1> <Link to="/palette/new">Create New Palette</Link></header>
                <div className="Palette-links">
                    {minipalettes}
                </div>
            </Box>
          );
    }
}

export default PaletteList;

import { Box } from '@mui/material';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';
import sizeHelper from '../sizeHelper';

class PaletteList extends Component {
    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '0 auto',
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
            },
            
            [sizeHelper.down('xl')]: {
                width: '60%',
            },
            [sizeHelper.down('lg')]: {
                width: '70%',
            },
            [sizeHelper.down('sm')]: {
                width: '80%',
            },
            [sizeHelper.down('xs')]: {
                width: '90%',
            },
        }
        let minipalettes = this.props.palette.map( palette => <MiniPalette {...palette} deletePalette={this.props.deletePalette}/> )
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

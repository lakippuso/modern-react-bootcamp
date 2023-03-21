import { Box } from '@mui/material';
import React, {Component} from 'react';

class Footer extends Component {
    render(){
        const { paletteName, paletteIcon} = this.props;
        const styles = {
            display: 'flex',
            padding: '10px',
            height: '5vh',
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'flex-end',
            fontSize: '1rem',
            "& .Footer .emoji": {
                fontSize: '1.2rem',
                marginLeft: '10px',
            },
        }
        return (
            <Box className="Footer" sx={styles}>
                <span className='name'>{paletteName} </span>
                <span className='emoji'>{paletteIcon}</span>
            </Box>
          );
    }
}

export default Footer;

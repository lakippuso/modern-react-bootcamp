import React, {Component} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    static defaultProps = {
        showSlider: true
    }
    state = {
        open: false,
    };

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({ open: false});
    };
  
    action = (
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
    );
    handleChangeChroma = evt =>{
        this.props.changeChroma(evt.target.value);
    }
    handleChangeFormat = evt =>{
        this.props.changeFormat(evt.target.value);
        this.setState({ open: true}, () =>{
            setTimeout(() => {
                this.setState({ open: false});
            }, 1000);
        });
    }
    render(){
        const { level, colorFormat, showSlider } = this.props;
        const styles = {
            display: 'flex',
            padding: '10px',
            backgroundColor: 'white',
            '& .Navbar-brand': {
                textAlign: 'center',
                textTransform: 'uppercase',
                alignSelf: 'center',
                /* color: 'rgba(0, 0, 0, 0.5)', */
            },
            '& .Navbar-control': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                
                '& .Navbar-slider': {
                    display: 'flex',
                    width: '20rem',
                }
            }
        };

        return (
            <Box className="Navbar" sx={styles}>
                <div className="Navbar-brand"><Link to="/palette">React Color Picker</Link></div>
                <div className="Navbar-control">
                    { showSlider && 
                        (<div className="Navbar-slider">
                                <Typography id="input-slider" gutterBottom>
                                    Level: {level}
                                </Typography>
                                <Slider aria-labelledby="input-slider"
                                        onChange={this.handleChangeChroma} 
                                        defaultValue={5} 
                                        marks
                                        min={1}
                                        max={9}
                                />
                        </div>)
                    }
                    <div className="Navbar-format">
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={colorFormat}
                        onChange={this.handleChangeFormat}
                        >
                            <MenuItem value="hex">HEX - #1234EF</MenuItem>
                            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
                        </Select>
                        
                    </div>
                </div>

                <Snackbar
                    autoHideDuration={3000}
                    anchorOrigin={{horizontal: "left", vertical: 'bottom'}}
                    open={this.state.open}
                    message={`Format changed to ${colorFormat}`}
                    action={this.action}
                />
            </Box>
          );
    }
}

export default Navbar;

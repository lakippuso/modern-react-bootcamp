import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    "& .navContent": {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    "& .navControls": {
      display: "flex",
      justifyContent: 'row',
      padding: '10px',
      '& form' : {
        display: "flex",
        justifyContent: 'row',
      }
    },
}));
  
export default function NewPaletteFormNav(props) {

    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => props.palettes.every( (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()) );

    const { handleSaveNewPalette, open, handleDrawerOpen } = props;
    const navigate = useNavigate();
    const [newPaletteName, setNewPaletteName] = useState('');

    const handleChangeNewPaletteName = evt => {
      setNewPaletteName(evt.target.value)
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default">
              <Toolbar>
                  <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                  >
                  <MenuIcon />
                  </IconButton>
                  <Box className="navContent">
                    <Typography variant="h6" noWrap component="div" className='navTitle'>
                      Create a Palette
                    </Typography>
                    <Box className="navControls">
                      <ValidatorForm 
                        onSubmit={() => handleSaveNewPalette(newPaletteName)}
                        className="validatorForm"
                      >
                          <TextValidator
                            label="Palette Name"
                            name="newPaletteName"
                            value={newPaletteName}
                            onChange={handleChangeNewPaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Palette Name must be unique']}
                          />

                        <Button variant="contained" color='primary' type='submit'>Save Palette</Button>
                      </ValidatorForm>
                      <Button variant="contained" color='secondary' onClick={() => navigate(-1)}>Go Back</Button>
                    </Box>
                  </Box>
              </Toolbar>
            </AppBar>
        </Box>
    );
}
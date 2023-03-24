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
                  <Typography variant="h6" noWrap component="div">
                  Persistent drawer
                  </Typography>
                  <ValidatorForm onSubmit={() => handleSaveNewPalette(newPaletteName)} style={{display: 'flex'}}>
                      <TextValidator
                        label="Palette Name"
                        name="newPaletteName"
                        value={newPaletteName}
                        onChange={handleChangeNewPaletteName}
                        validators={['required', 'isPaletteNameUnique']}
                        errorMessages={['Enter Palette Name', 'Palette Name must be unique']}
                      />

                    <Button variant="contained" color='primary' type='submit'>Save Palette</Button>
                    <Button variant="contained" color='secondary' onClick={() => navigate(-1)}>Go Back</Button>
                  </ValidatorForm>
              </Toolbar>
            </AppBar>
        </Box>
    );
}
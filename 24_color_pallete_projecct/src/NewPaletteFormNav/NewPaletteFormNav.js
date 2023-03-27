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
import PaletteMetaForm from '../PaletteMetaForm/PaletteMetaForm';
import sizeHelper from '../sizeHelper';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "& .navContent": {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      [sizeHelper.down('sm')]: {
        flexDirection: 'row',
      },
    },
    "& .navControls": {
      '& button' : {
        marginRight: '10px',
      }
    },
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [sizeHelper.down('sm')]: {
        "& .navControls": {
          display: 'none',
        },
      }
    }),
}));
  
export default function NewPaletteFormNav(props) {

    const { handleSaveNewPalette, open, handleDrawerOpen, palettes } = props;
    const [ isDialogOpen, setIsDialogOpen ] = useState(false);
    const navigate = useNavigate();

    const handleClickOpenDialog = () => {
      setIsDialogOpen(true);
    }
    const handleClickCloseDialog = () => {
      setIsDialogOpen(false);
    }
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
                      <Button variant="contained" onClick={handleClickOpenDialog}>
                        Save Palette
                      </Button>
                      <Button variant="contained" color='secondary' onClick={() => navigate(-1)}>Go Back</Button>
                    </Box>
                  </Box>
              </Toolbar>
              { isDialogOpen && 
                    <PaletteMetaForm 
                      handleSaveNewPalette={handleSaveNewPalette}
                      palettes={palettes}
                      handleClickCloseDialog={handleClickCloseDialog}
                    />
              }
            </AppBar>
        </Box>
    );
}
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker, SketchPicker  } from 'react-color';
import { Button, TextField } from '@mui/material';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import { useForm } from "react-hook-form";
import { MuiColorInput } from 'mui-color-input';
import { useState } from 'react';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPaletteForm(props) {
    // const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState('#fff');
    const [colors, setColors] = useState([]);
    const [newName, setNewName] = useState('');
    const [isColorNameValid, setIsFormValid] = useState(true);
    const [errorText, setErrorText] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const handleDrawerOpen = () => setOpen(true);
  
    const handleDrawerClose = () => setOpen(false);

    const addColors = () => (!errors.colorName) && setColors([...colors, { name: newName, color: currentColor }]);

    const handleChangeNewName = evt => {
      setNewName(evt.target.value)
    };


    const onSubmit = () =>{
      let isColorUnique = colors.every( (color) => color.color.toLowerCase() !== currentColor.toLowerCase());
      let isColorNameUnique = colors.every( (color) => color.name.toLowerCase() !== newName.toLowerCase());
      
      if(!isColorUnique) {
        setErrorText('Color Value must be unique');
        setIsFormValid(false);
        return;
      }
      if(!isColorNameUnique) {
        setErrorText('Color Name must be unique');
        setIsFormValid(false);
        return;
      }
      addColors();
      setErrorText('');
      setIsFormValid(true);
    };

    return (
      <Box sx={{ display: 'flex' }}>
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
            <Button color='primary'>Clear Palette</Button>
            <Button color='primary'>Save Palette</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Typography variant='h4'>Create your own Palette</Typography>
          <Box className="" sx={{ display: 'flex' ,}}>
            <Button variant='contained' color='secondary'>Clear Palette</Button>
            <Button variant='contained' color='primary'>Save Palette</Button>
          </Box>
          <ChromePicker color={currentColor} onChangeComplete={ newColor => setCurrentColor(newColor.hex)}/>
          {/* <MuiColorInput value={currentColor} onChange={setCurrentColor} /> */}
          <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={errors.colorName ? true : false || !isColorNameValid}
                id="standard-error"
                label="Color Name"
                defaultValue=""
                variant="filled"
                helperText={errors.colorName ? 'Input Field is required' : errorText}
                {...register("colorName", { required: true})} 
                onChange={handleChangeNewName}
              />
              <Button 
                variant='contained' 
                sx={{backgroundColor: currentColor}} 
                type="submit">
                  Add Color
              </Button>
          </form>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Box 
            sx={{
              display: 'flex',
              height: '100%',
              flexWrap: 'wrap',
            }}
          >
            {colors.map( c => <DragableColorBox color={c.color} 
                                                name={c.name}/>
            )}
          </Box>
        </Main>
      </Box>
    );
}
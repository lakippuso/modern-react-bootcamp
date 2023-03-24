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
import { ChromePicker  } from 'react-color';
import { Button, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DragableColorList from '../DragableColorList/DragableColorList';
import { arrayMove } from 'react-sortable-hoc';

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
    const { maxBoxCount = 20 } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState('#fff');
    const [colors, setColors] = useState(props.palettes[0].colors);
    const [newColorName, setNewColorName] = useState('');
    const [newPaletteName, setNewPaletteName] = useState('');
    const [isColorNameValid, setIsFormValid] = useState(true);
    const [errorText, setErrorText] = useState('');
    const [isListDragable, setIsListDragable] = useState(false);

    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => props.palettes.every( (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()) );

    const handleDrawerOpen = () => setOpen(true);
  
    const handleDrawerClose = () => setOpen(false);

    const addColors = () => (!errors.colorName) && setColors([...colors, { name: newColorName, color: currentColor }]);

    const handleChangeNewColorName = evt => {
      setNewColorName(evt.target.value)
    };
    const handleChangeNewPaletteName = evt => {
      setNewPaletteName(evt.target.value)
    };

    const handleSaveNewPalette = () => {
      let newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, '-'),
        emoji: "emoji",
        colors: colors,
      }
      props.saveNewPalette(newPalette);
      return navigate('/palette');
    }

    const onSubmit = () =>{
      let isColorUnique = colors.every( (color) => color.color.toLowerCase() !== currentColor.toLowerCase());
      let isColorNameUnique = colors.every( (color) => color.name.toLowerCase() !== newColorName.toLowerCase());
      
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

    const deleteDragableBox = (colorId) =>{
      setColors( colors.filter( color => color.name !== colorId) );
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
      setColors(arrayMove(colors, oldIndex, newIndex));
    };

    const toggleSort = () =>{
      setIsListDragable( !isListDragable );
    }
    const clearPalette = () =>{
      setColors([]);
    }

    const addRandomColor = () =>{
      let allColors = props.palettes.map(p => p.colors).flat();
      let randomNumber = Math.floor(Math.random() * allColors.length);
      let newColor = allColors[randomNumber];

      // const isColorUnique= () => colors.every( (color) => color.color.toLowerCase() !== newColor.color.toLowerCase());
      // const isColorNameUnique = colors.every( (color) => color.name.toLowerCase() !== newColor.name.toLowerCase());

      // while(!(isColorUnique && isColorNameUnique)){
      // }
      setColors([...colors, newColor]);
    }
    
    let isPaletteFull = colors.length >= maxBoxCount;

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
            <ValidatorForm onSubmit={handleSaveNewPalette} style={{display: 'flex'}}>
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
              <Button 
                variant="contained" 
                color={!isListDragable ? 'primary' : 'success'}
                onClick={toggleSort}
              >
                {!isListDragable ? 'Edit Palette' : 'Save Edit'}
              </Button>
              <Button 
                variant="contained" 
                color='error' 
                onClick={clearPalette}
              >
                Clear Palette
              </Button>
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
                onChange={handleChangeNewColorName}
              />
              <Button 
                variant='contained' 
                sx={{backgroundColor: currentColor}} 
                type="submit"
                disabled={isPaletteFull}
              >
                {
                  isPaletteFull ? 
                    'Palette Full':
                    'Add Color'
                }
              </Button>
          </form>
          
          <Button 
            variant="contained" 
            color='primary' 
            onClick={addRandomColor}
            disabled={isPaletteFull}
          >
            Add Random Color
          </Button>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <DragableColorList 
            colors={colors} 
            deleteDragableBox={deleteDragableBox}
            isListDragable={isListDragable}
            axis='xy'
            onSortEnd={onSortEnd}
          />
        </Main>
      </Box>
    );
}
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DragableColorList from '../DragableColorList/DragableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewPaletteFormNav from '../NewPaletteFormNav/NewPaletteFormNav';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';

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
    const [open, setOpen] = useState(false);
    const [colors, setColors] = useState(props.palettes[0].colors);
    const [isListDragable, setIsListDragable] = useState(false);

    const handleDrawerOpen = () => setOpen(true);
  
    const handleDrawerClose = () => setOpen(false);

    const addColors = (newColorName, currentColor) => setColors([...colors, { name: newColorName, color: currentColor }]);

    const handleSaveNewPalette = (newPaletteName, newPaletteEmoji) => {
      let newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, '-'),
        emoji: newPaletteEmoji,
        colors: colors,
      }
      props.saveNewPalette(newPalette);
      return navigate('/palette');
    }

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

      addColors(newColor.name, newColor.color);
    }
    
    let isPaletteFull = colors.length >= maxBoxCount;

    return (
      <Box sx={{ display: 'flex' }}>
        <NewPaletteFormNav 
          palettes={props.palettes}
          handleSaveNewPalette={handleSaveNewPalette} 
          open={open} 
          handleDrawerOpen={handleDrawerOpen}
          maxBoxCount={maxBoxCount}
        />
        <Drawer
          sx={{
            display: 'flex',
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
            "& .drawerContent": {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            },
            "& .paletteButtons": {
              display: 'flex',
              width: '90%',
              justifyContent:"center",
              "& button": {
                fontSize: '.8rem',
              }
            }
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
          <Box className="drawerContent">
            <Typography variant='h4'>Create your own Palette</Typography>
            <Box className="paletteButtons">
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
            </Box>
            <ColorPickerForm 
              colors={colors}
              addColors={addColors}
              isPaletteFull={isPaletteFull}
              addRandomColor={addRandomColor}
              />
          </Box>
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
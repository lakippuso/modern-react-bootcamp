import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';
import sizeHelper from '../sizeHelper';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Dialog, DialogTitle } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import { blue, red } from '@mui/material/colors';


class PaletteList extends Component {
    state = {
        isDeleteDialogOpen: false,
        deletingId: '',
    }
    openDialog = (id) => {
        this.setState({ isDeleteDialogOpen: true, deletingId: id })
    }
    closeDialog = () => {
        this.setState({ isDeleteDialogOpen: false, deletingId: '' })
    }
    handleDeletePalette = () => {
        if(this.state.deletingId != '') this.props.deletePalette(this.state.deletingId);

        this.closeDialog();
    }
    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '0 auto',
            ".fade-exit-active": {
                opacity: 0,
                transition: 'opacity 500ms ease-out',
            },
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
        let minipalettes = this.props.palette.map( (palette) => (
        <CSSTransition
            key={palette.id}
            timeout={500}
            classNames="fade"
        >
            <MiniPalette 
                {...palette} 
                deletePalette={this.props.deletePalette}
                openDialog={this.openDialog}
            />
        </CSSTransition>
        ))
        return (
            <Box className="PaletteList" sx={style}>
                <header><h1>PaletteList</h1> <Link to="/palette/new">Create New Palette</Link></header>
                <TransitionGroup className="Palette-links">
                    {minipalettes}
                </TransitionGroup>
                <Dialog open={this.state.isDeleteDialogOpen} aria-labelledby="delete-dialog">
                    <DialogTitle id="delete-dialog">Delete Palette?</DialogTitle>
                    
                    <List sx={{ pt: 0 }}>
                        <ListItem disableGutters>
                            <ListItemButton onClick={this.handleDeletePalette}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <DeleteIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'Delete'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disableGutters>
                            <ListItemButton
                                autoFocus
                                onClick={this.closeDialog}
                            >
                                <ListItemAvatar>
                                <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                                    <CancelIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Cancel" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Dialog>
            </Box>
          );
    }
}

export default PaletteList;

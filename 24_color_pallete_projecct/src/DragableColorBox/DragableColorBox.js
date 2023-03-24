import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';


const DragableColorBox = SortableElement((props) => {
    const { name, color } = props;
    const styles = {
        background: color,
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        boxSizing: 'border-box',
        "& .box-content": {
            position: 'absolute',
            padding: '5px 10px',
            bottom: 0,
            color: 'black',
            fontSize: '.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }
    }
    return(
        <Box className="DragableColorBox" sx={styles} >
            <div className="box-content">
                <span>{name}</span>
            </div>
        </Box>
    );
});

const NonDragableColorBox = (props) => {
    const { name, color, handleDelete } = props;
    const styles = {
        background: color,
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        boxSizing: 'border-box',
        "& .box-content": {
            position: 'absolute',
            padding: '5px 10px',
            bottom: 0,
            color: 'black',
            fontSize: '.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            "& svg": {
                fontSize: '1.2rem',
                zIndex: 10,
                opacity: 1,
            },
        },
        "&:hover svg": {
            color: 'white',
        }
    }
    return(
        <Box className="DragableColorBox" sx={styles} >
            <div className="box-content">
                <span>{name}</span>
                <DeleteIcon onClick={handleDelete}/>
            </div>
        </Box>
    );
};

export default DragableColorBox;

export {NonDragableColorBox};
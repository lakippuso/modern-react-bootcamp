import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import sizeHelper from '../sizeHelper';

const styles = {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
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
    },
    [sizeHelper.down('lg')]: {
        width: '25%',
        height: '20%',
    },
    [sizeHelper.down('md')]: {
        width: '50%',
        height: '10%',
    },
    [sizeHelper.down('sm')]: {
        width: '100%',
        height: '5%',
    }
};

const DragableColorBox = SortableElement((props) => {
    const { name, color } = props;
    return(
        <Box className="DragableColorBox" sx={styles} style={{ backgroundColor: color }} >
            <div className="box-content">
                <span>{name}</span>
            </div>
        </Box>
    );
});

const NonDragableColorBox = (props) => {
    const { name, color, handleDelete } = props;
    return(
        <Box className="DragableColorBox" sx={styles} style={{ backgroundColor: color }}>
            <div className="box-content">
                <span>{name}</span>
                <DeleteIcon onClick={handleDelete}/>
            </div>
        </Box>
    );
};

export default DragableColorBox;

export {NonDragableColorBox};
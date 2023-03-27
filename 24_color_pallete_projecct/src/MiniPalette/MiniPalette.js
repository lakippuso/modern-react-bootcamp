import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import sizeHelper from '../sizeHelper';

export default function MiniPalette(props) {
    const styles = {
        position: 'relative',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30%',
        margin: '10px auto',
        padding: '10px',
        border: '1px solid grey',
        borderRadius: '10px',
        cursor: 'pointer',
        "& h5": {
            margin: 0,
            fontSize: '1.2rem',
        },
        "& .MiniPalette-colors": {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: '150px',
            width: '100%',
            backgroundColor: '#dae1e3',
            borderRadius: '5px',
            overflow: 'hidden',
        },
        "& .MiniPalette-content": {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        '& .deleteIcon': {
            position: 'absolute',
            color: 'white',
            top: 0,
            right: 0,
            padding: '6px',
            height: "24px",
            width: '24px',
            backgroundColor: '#eb3d30',
            zIndex: 10,
            opacity: 0,
            transition: 'all ease-in-out 0.3s'
        },
        "&:hover .deleteIcon": {
            opacity: 1,
        },
        [sizeHelper.down('xs')]: {
            width: '60%',
        },
    }
    const miniColors = props.colors.map( c => 
        <Box sx={{
            backgroundColor: c.color, 
            width: "20%", height: '25%',
            display: 'inline-block',
        }}
        />
    );
    
    const navigate = useNavigate();
    const goToPalette = evt =>{
        navigate(`/palette/${props.id}`);
    }

    const handleDelete = evt => {
        evt.stopPropagation()
        props.deletePalette(props.id);
    }

    return(
        <Box sx={styles} className="MiniPalette" onClick={goToPalette}>
            <div className="delete">
                <DeleteIcon className="deleteIcon" onClick={handleDelete}/>
            </div>
            <div className="MiniPalette-colors">{miniColors}</div>
            <div className="MiniPalette-content">
                <h5 className="MiniPalette-title">{props.paletteName}</h5>
                <span className="MiniPalette-emoji">{props.emoji}</span>
            </div>
        </Box>
    );
}
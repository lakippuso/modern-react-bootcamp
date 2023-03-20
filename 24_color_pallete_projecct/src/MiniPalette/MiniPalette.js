import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MiniPalette(props) {
    const styles = {
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
        }
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
    const handleClick = evt =>{
        navigate(`/palette/${props.id}`);
    }

    return(
        <Box sx={styles} className="MiniPalette" onClick={handleClick}>
            <div className="MiniPalette-colors">{miniColors}</div>
            <div className="MiniPalette-content">
                <h5 className="MiniPalette-title">{props.paletteName}</h5>
                <span className="MiniPalette-emoji">{props.emoji}</span>
            </div>
        </Box>
    );
}
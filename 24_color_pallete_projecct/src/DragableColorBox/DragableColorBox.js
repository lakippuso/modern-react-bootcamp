import { Box } from "@mui/material";

export default function DragableColorBox(props) {
    const styles = {
        background: props.color,
        height: '25%',
        width: '20%',

    }
    return(
        <Box className="DragableColorBox" sx={styles}>
            {props.name}
            {/* {props.color} */}
        </Box>
    )
}
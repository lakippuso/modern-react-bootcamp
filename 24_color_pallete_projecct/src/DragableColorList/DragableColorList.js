import { Box } from "@mui/material";
import DragableColorBox, { NonDragableColorBox } from "../DragableColorBox/DragableColorBox";
import {SortableContainer} from 'react-sortable-hoc';

const DragableColorList = SortableContainer(({colors, deleteDragableBox, isListDragable}) => {
    let items =  colors.map( (color, i) => 
    isListDragable ? 
        <DragableColorBox 
            {...color} 
            index={i} 
            handleDelete={() => deleteDragableBox(color.name)}
            isListDragable={isListDragable}
        />
    :
        <NonDragableColorBox 
            {...color} 
            index={i} 
            handleDelete={() => deleteDragableBox(color.name)}
            isListDragable={isListDragable}
        />
    ) ;
    return (
        <Box 
            sx={{
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {items}
        </Box>
    );
});

export default DragableColorList;
import { Box } from "@mui/material";
import DragableColorBox, { NonDragableColorBox } from "../DragableColorBox/DragableColorBox";
import {SortableContainer} from 'react-sortable-hoc';

const DragableColorList = SortableContainer(({colors, deleteDragableBox, isListDragable}) => {
    let items =  colors.map( (color, i) => 
    isListDragable ? 
        <DragableColorBox 
            {...color} 
            key={`item-${color.color}`} 
            index={i} 
            handleDelete={() => deleteDragableBox(color.name)}
            isListDragable={isListDragable}
        />
    :
        <NonDragableColorBox 
            {...color} 
            key={`item-${color.color}`} 
            index={i} 
            handleDelete={() => deleteDragableBox(color.name)}
            isListDragable={isListDragable}
        />
    ) ;
    return (
        <Box 
            sx={{
            height: '100%',
            }}
        >
            {items}
        </Box>
    );
});

export default DragableColorList;
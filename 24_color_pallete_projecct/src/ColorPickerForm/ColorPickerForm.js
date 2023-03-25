import { Box, Button } from "@mui/material";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default function ColorPickerForm(props) {
    
    const [currentColor, setCurrentColor] = useState('teal');
    const [newColorName, setNewColorName] = useState('');
    
    const { addColors, colors, isPaletteFull, addRandomColor } = props;

    ValidatorForm.addValidationRule('isColorValueUnique', (value) => colors.every( (color) => color.color.toLowerCase() !== currentColor.toLowerCase()) );

    ValidatorForm.addValidationRule('isColorNameUnique', (value) => colors.every( (color) => color.name.toLowerCase() !== newColorName.toLowerCase()) );
    
    const changeNewColorName = evt => {
        setNewColorName(evt.target.value);
    };
    const handleSubmit = () =>{
        addColors( newColorName, currentColor );
        setNewColorName(' ');
    }
    const styles = {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '1rem',
        "& .chrome-picker": {
            width: '90% !important' ,
            margin: 'auto',
        },
        '& .colorPickerForm': {
            width: '90%',
            margin: 'auto',
            marginTop: '1rem',
            "& .colorInput": {
                width: '100%',
            },
            "& .buttons": {
                display: 'flex',
                '& button': {
                    fontSize: '.8rem',
                    margin: '10px',
                }
            },
        }
    }
    return (
        <Box sx={styles}>
            <ChromePicker color={currentColor} onChangeComplete={ newColor => setCurrentColor(newColor.hex)}/>
            <ValidatorForm 
                onSubmit={handleSubmit}
                className='colorPickerForm'
            >
                <TextValidator
                    variant="filled"
                    className="colorInput"
                    label="Palette Name"
                    name="newColorName"
                    value={newColorName}
                    onChange={changeNewColorName}
                    validators={['required', 'isColorNameUnique', 'isColorValueUnique']}
                    errorMessages={['Enter Color Name', 'Color Name must be unique', 'Color Value must be unique']}
                />
                <div className="buttons">
                    <Button 
                        variant="contained" 
                        color='primary' 
                        onClick={addRandomColor}
                        disabled={isPaletteFull}
                    >
                    Add Random Color
                    </Button>
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
                </div>
            </ValidatorForm>
        </Box>
    );
}
import { Button } from "@mui/material";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

export default function ColorPickerForm(props) {
    
    const [currentColor, setCurrentColor] = useState('teal');
    const [newColorName, setNewColorName] = useState('');
    
    const { addColors, colors, isPaletteFull } = props;

    ValidatorForm.addValidationRule('isColorValueUnique', (value) => colors.every( (color) => color.color.toLowerCase() !== currentColor.toLowerCase()) );

    ValidatorForm.addValidationRule('isColorNameUnique', (value) => colors.every( (color) => color.name.toLowerCase() !== newColorName.toLowerCase()) );
    
    const changeNewColorName = evt => {
        setNewColorName(evt.target.value);
    };
    const handleSubmit = () =>{
        addColors( newColorName, currentColor );
        setNewColorName(' ');
    }

    return (
        <>
            <ChromePicker color={currentColor} onChangeComplete={ newColor => setCurrentColor(newColor.hex)}/>
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                    label="Palette Name"
                    name="newColorName"
                    value={newColorName}
                    onChange={changeNewColorName}
                    validators={['required', 'isColorNameUnique', 'isColorValueUnique']}
                    errorMessages={['Enter Color Name', 'Color Name must be unique', 'Color Value must be unique']}
                />
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
            </ValidatorForm>
        </>
    );
}
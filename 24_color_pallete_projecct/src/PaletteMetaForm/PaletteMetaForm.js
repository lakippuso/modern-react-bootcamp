import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export default function PaletteMetaForm(props) {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => props.palettes.every( (palette) => palette.paletteName.toLowerCase() !== value.toLowerCase()) );

    const [stage, setStage] = useState('emoji');
    const [newPaletteName, setNewPaletteName] = useState('');
    const [newPaletteEmoji, setNewPaletteEmoji] = useState('');
    const { handleSaveNewPalette, handleClickCloseDialog } = props;

    const nextStep = () => {
      setStage('name');
    };
  
    const handleClose = () => {
      setStage('');
      handleClickCloseDialog();
    };

    const handleChangeNewPaletteName = evt => {
      setNewPaletteName(evt.target.value)
    };
    const inputEmoji = value => {
      setNewPaletteEmoji(value.native);
      nextStep();
    };

    const savePalette = () => handleSaveNewPalette(newPaletteName, newPaletteEmoji)
    return (
      <div>
          <Dialog open={stage === 'emoji'} onClose={handleClose}>
            
            <DialogTitle>Choose an Emoji</DialogTitle>
            <Picker data={data} onEmojiSelect={inputEmoji} theme='light'/>
          </Dialog>
          <Dialog open={stage === 'name'} onClose={handleClose}>
            <DialogTitle>Save Palette {newPaletteEmoji}</DialogTitle>
            <ValidatorForm 
                onSubmit={savePalette}
                className="validatorForm"
            >
              <DialogContent>
                <DialogContentText>
                  Enter your desired palette name. Your palette name must be unique so you can identify it easily.
                </DialogContentText>
                
                <TextValidator
                label="Palette Name"
                name="newPaletteName"
                fullWidth
                margin="normal"
                variant="standard"
                value={newPaletteName}
                onChange={handleChangeNewPaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name', 'Palette Name must be unique']}
                />
                
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" color="primary" type='submit'>Save Palette</Button>
              </DialogActions>
                  
            </ValidatorForm>
          </Dialog>
      </div>
    );
}
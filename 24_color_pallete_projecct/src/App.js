import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './NewPaletteForm/NewPaletteForm';
import { useState } from 'react';
import seedColors from './seedColors';

function App() {
  const [palettes, setPalettes] = useState(seedColors);
  const saveNewPalette = (newPalette) =>{
    setPalettes([...palettes, newPalette]);
  }
  
  const getPalette = (id) => {
    return palettes.find( function(palette) {
        if(palette.id === id) return palette;
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<PaletteList />}/>
        <Route path="palette">
          <Route index element={<PaletteList palette={palettes}/>}/>
          <Route path=':paletteId' element={<Palette getPalette={getPalette}/>}/>
          <Route path=':paletteId/:colorId' element={<SingleColorPalette getPalette={getPalette}/>}/>
          <Route path='new' element={<NewPaletteForm saveNewPalette={saveNewPalette} palettes={palettes}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

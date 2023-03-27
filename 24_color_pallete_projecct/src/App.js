import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './NewPaletteForm/NewPaletteForm';
import { useEffect, useState } from 'react';
import seedColors from './seedColors';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);
  
  useEffect(() => {
    syncLocalStorage();
  });
  
  const saveNewPalette = (newPalette) =>{
    setPalettes([...palettes, newPalette]);
  }
  const deletePalette = (id) =>{
    setPalettes(palettes.filter( palette => palette.id !== id));
    syncLocalStorage();
  }
  
  const getPalette = (id) => {
    return palettes.find( function(palette) {
        return palette.id === id;
    });
  }

  const syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(palettes),
    )
  }
  const list = <PaletteList palette={palettes} deletePalette={deletePalette}/>;
  return (
    <div className="App">
      <Routes>
        <Route index element={list}/>
        <Route path="palette">
          <Route index element={list}/>
          <Route path=':paletteId' element={<Palette getPalette={getPalette}/>}/>
          <Route path=':paletteId/:colorId' element={<SingleColorPalette getPalette={getPalette}/>}/>
          <Route path='new' element={<NewPaletteForm saveNewPalette={saveNewPalette} palettes={palettes}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

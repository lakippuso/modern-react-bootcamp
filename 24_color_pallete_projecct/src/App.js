import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './NewPaletteForm/NewPaletteForm';
import { useState } from 'react';

function App() {
  const [palette, setPalette] = useState();
  const savePalette = (newPalette) =>{
    console.log(newPalette)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="palette">
          <Route index element={<PaletteList />}/>
          <Route path=':paletteId' element={<Palette />}/>
          <Route path=':paletteId/:colorId' element={<SingleColorPalette />}/>
          <Route path='new' element={<NewPaletteForm />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

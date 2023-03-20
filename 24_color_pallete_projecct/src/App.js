import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';
import SingleColorPalette from './SingleColorPalette/SingleColorPalette';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="palette">
          <Route index element={<PaletteList />}/>
          <Route path=':paletteId' element={<Palette />}/>
          <Route path=':paletteId/:colorId' element={<SingleColorPalette />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

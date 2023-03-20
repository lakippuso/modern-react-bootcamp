import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import PaletteList from './PaletteList/PaletteList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="palette">
          <Route index element={<PaletteList />}/>
          <Route path=':paletteId' element={<Palette />}/>
          <Route path=':paletteId/:colorId' element={<h1>Test</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

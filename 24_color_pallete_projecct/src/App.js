import './App.css';
import { Routes, Route } from 'react-router-dom';
import Palette from './Palette/Palette';
import Homepage from './Homepage/Homepage';

function App() {
  // let routes = seedColors.map( (palette, index) => ( <Route path={}/>));
  return (
    <div className="App">
      <Routes>
        <Route path="palette">
          <Route index element={<Homepage />}/>
          <Route path=':paletteId' element={<Palette />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

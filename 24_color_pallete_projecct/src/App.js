import './App.css';
import generatePalette from './colorHelper';
import Palette from './Palette/Palette';
import seedColors from './seedColors';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;

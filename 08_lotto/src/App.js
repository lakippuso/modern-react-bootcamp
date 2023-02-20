import './App.css';
import Lottery from './Lottery/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Lotto" maxNum={10} numBalls={3}/>
    </div>
  );
}

export default App;

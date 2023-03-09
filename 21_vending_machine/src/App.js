import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import VendingMachine from './VendingMachine/VendingMachine';
import Soda from './Soda/Soda';
import Chips from './Chips/Chips';
import Fish from './Fish/Fish';

function App() {
  return (
    <div className="App">
      <ul className='App-nav'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/soda">Soda</NavLink></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><NavLink to="/fish">Fish</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<VendingMachine />}/>
        <Route path='/soda' element={<Soda />}/>
        <Route exact path='/chips' element={<Chips />}/>
        <Route path='/fish' element={<Fish />}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import { Home } from './Home';

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li><NavLink activeClassName='active-link' to="/">Home</NavLink></li>
            <li><NavLink activeClassName='active-link' to="/about">About</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about" element={<About name="Second"/>}/>
          <Route path="/about/him" element={<About name="Him"/>}/>
        </Routes>
      </div>
  );
}

export default App;

import './App.css';

import useToggleHook from './toggleHook';
import useInputHook from './inputHook';
import SWMovies from './SWMovies';

function App() {
  const [isHappy, toggleIsHappy] = useToggleHook(true);
  const [name, setName, resetName] = useInputHook();

  const handleChange = evt =>{
    setName(evt.target.value);
  }
  return (
    <div className="App">
      <h1 onClick={toggleIsHappy}>{name + " is "}{isHappy ? "🤣" : '😥'}</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={resetName}>Reset</button>
      <SWMovies />
    </div>
  );
}

export default App;

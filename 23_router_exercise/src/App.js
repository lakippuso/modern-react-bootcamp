import './App.css';
import DogFinder from './DogFinder/DogFinder';
import Dog from './Dog/Dog';
import NotFound from './NotFound';
import Navbar from './Navbar/Navbar';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import whiskey from './images/whiskey.jpg';
import { Routes, Route } from 'react-router-dom';


function App() {
  let defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  return (
    <div className="App">
      
      <Routes>
        <Route path="/dogs" element={ <Navbar doglinks={defaultProps.dogs} />}>
          <Route index element={<DogFinder dogs={defaultProps.dogs} />}/>
          <Route path=':id' element={ <Dog dogs={defaultProps.dogs} /> } />
        </Route>
        
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;

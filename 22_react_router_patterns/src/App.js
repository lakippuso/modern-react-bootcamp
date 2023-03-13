import logo from './logo.svg';
import './App.css';
import Images from './Images';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/images'>
          <Route index element={<SearchForm />}/>
          <Route 
            path=':name' 
            element={<Images />}
          />
          <Route 
            path=':group/:name' 
            element={<Images />}
          />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;

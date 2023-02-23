import './App.css';
import BoxList from './BoxList/Boxlist';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <BoxList/>
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;

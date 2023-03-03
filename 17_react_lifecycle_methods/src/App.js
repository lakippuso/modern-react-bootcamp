import './App.css';
import GihubUserInfo from './GithubUserInfo';
import Timer from './Timer'
import ZenQuote from './ZenQuote';

function App() {
  return (
    <div className="App">
      <Timer />
      <ZenQuote />
      <GihubUserInfo username="facebook"/>
      <GihubUserInfo username="github"/>
      <GihubUserInfo username="discord"/>
      <GihubUserInfo username="lakippuso"/>
    </div>
  );
}

export default App;

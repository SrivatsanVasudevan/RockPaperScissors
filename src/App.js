import Game from './components/game/game';
import Heading from './components/heading/heading';
import Action from './components/gameaction/gameaction'
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <Game />
    </div>
  );
}

export default App;

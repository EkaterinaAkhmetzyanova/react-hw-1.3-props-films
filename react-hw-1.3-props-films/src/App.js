import Stars from './components/Stars';
import shortid from 'shortid';
import './App.css';

function App() {
  const stars = [1, 0, 5, 7, 'lala', 3]
  return (
    <div className="App">
      {stars.map((element) => <Stars count={element} key={shortid.generate()} />)}
    </div>
  );
}

export default App;

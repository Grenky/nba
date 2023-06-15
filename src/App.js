
import './App.css';
import Header from './components/Header';
import Teams from './components/Teams';
import Players from './components/Players';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Teams />
      <Players />
      <About />
    </div>
  );
}

export default App;

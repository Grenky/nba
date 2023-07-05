
import './App.css';
import Header from './components/Header';
import Teams from './components/Teams';
import Players from './components/Players';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Teams" element={<Teams />} />
        <Route path="Players" element={<Players />} />
        <Route path="About" element={<About />} />
    </Routes>

    </div>
  );
}

export default App;

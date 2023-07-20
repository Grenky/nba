
import './App.css';
import Header from './components/Header';
import Usd from './components/Usd';
import GBP from './components/GBP';
import EUR from './components/EUR';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SIgnIn';

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Usd" element={<Usd />} />
        <Route path="GBP" element={<GBP />} />
        <Route path="EUR" element={<EUR />} />
        <Route path="SignIn" element={<SignIn />} />
    </Routes>

    </div>
  );
}

export default App;

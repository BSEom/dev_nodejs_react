import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cryptocp from './pages/Crypto';
import LocalStorage from './pages/LocalStorage';

function App() {
  return (
    <>
    <Link to="/">🛖Home</Link> | {" "}
    <Link to="/crypto">Crypto</Link> | {" "}
    <Link to="/localstorage">LocalStorage</Link> | {" "}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto" element={<Cryptocp />} />
      <Route path="/localstorage" element={<LocalStorage />} />
    </Routes>
    </>
  );
}

export default App;
